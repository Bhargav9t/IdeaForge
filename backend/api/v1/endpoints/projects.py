import json
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy import select, func
from sqlalchemy.orm import Session
import uuid
from database import get_db
from models import Project as ProjectModel, Node as NodeModel, Edge as EdgeModel, User
from schemas import Project, Node, Edge, GenerateRequest, ProjectStats
from groq import AsyncGroq
import os

router = APIRouter()

# Initialize Groq Client
# For production, ensure GROQ_API_KEY is in .env
client = AsyncGroq(api_key=os.environ.get("GROQ_API_KEY", "dummy-key"))

@router.get("/stats/{user_id}", response_model=ProjectStats)
def get_project_stats(user_id: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
        
    total = db.query(ProjectModel).filter(ProjectModel.user_id == user_id).count()
    active = db.query(ProjectModel).filter(ProjectModel.user_id == user_id, ProjectModel.status == "active").count()
    completed = db.query(ProjectModel).filter(ProjectModel.user_id == user_id, ProjectModel.status == "completed").count()
    
    return ProjectStats(total=total, active=active, completed=completed)

@router.post("/questions")
async def generate_questions(request: GenerateRequest, db: Session = Depends(get_db)):
    """
    Generate dynamic questionnaire based on depth (simple=5, moderate=15, complex=25)
    """
    depth_map = {"simple": 5, "moderate": 15, "complex": 25}
    num_questions = depth_map.get(request.depth.lower(), 5)
    
    prompt = f"""
    You are an AI Software Architect. The user wants to build: "{request.prompt}".
    Generate exactly {num_questions} highly relevant architectural questions to clarify the requirements.
    Return ONLY valid JSON matching this schema:
    {{"questions": [{{"id": "q1", "text": "...", "type": "text/select", "options": ["opt1", "opt2"]}}]}}
    If the type is "text", options can be an empty array. Do not include markdown blocks, just the raw JSON.
    """
    
    try:
        response = await client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model="llama3-8b-8192",
            temperature=0.7,
            response_format={"type": "json_object"}
        )
        content = response.choices[0].message.content
        return json.loads(content)
    except Exception as e:
        # In case of 429, the frontend handles exponential backoff based on 429 status code
        if "429" in str(e):
             raise HTTPException(status_code=429, detail="Rate limit exceeded. Cooling the Forge...")
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/refine")
async def refine_and_save_graph(request: dict, db: Session = Depends(get_db)):
    """
    Takes concept + answers, asks Groq for nodes/edges in @xyflow/react skeuomorphic format,
    saves to DB, and returns the result.
    """
    concept = request.get("concept", "")
    answers = request.get("answers", [])
    user_id = request.get("user_id")
    
    if not user_id:
        raise HTTPException(status_code=400, detail="Missing user_id")
        
    prompt = f"""
    Concept: {concept}
    User Answers: {json.dumps(answers)}
    
    Design the system architecture graph. Return ONLY a JSON object compatible with React Flow (@xyflow/react) exactly like this:
    {{
      "nodes": [{{"id": "uuid-here", "type": "skeuomorphic", "data": {{"label": "...", "techStack": ["React", "Vite"]}}, "position": {{"x": 0, "y": 0}}}}],
      "edges": [{{"id": "e-uuid-here", "source": "source-uuid", "target": "target-uuid", "type": "patchCable"}}]
    }}
    Make sure ALL nodes have type='skeuomorphic' and ALL edges have type='patchCable'.
    """
    
    try:
        response = await client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model="llama3-8b-8192",
            temperature=0.2,
            response_format={"type": "json_object"}
        )
        content = response.choices[0].message.content
        graph_data = json.loads(content)
        
        # Save to MySQL logically replacing xyflow formats to backend schema formats where appropriate,
        # but the prompt specifically states: "Backend must save these nodes/edges to MySQL before they reach the GraphCanvas"
        
        db_project = ProjectModel(id=str(uuid.uuid4()), user_id=user_id, title=concept[:50] + "...")
        db.add(db_project)
        db.flush()
        
        for n in graph_data.get("nodes", []):
            db.add(NodeModel(
                id=str(uuid.uuid4()), # Generate new internal backend UUID for safety or use theirs if they generated valid UUIDs
                project_id=db_project.id,
                label=n.get("data", {}).get("label", "Unknown"),
                description="Generated Node",
                tech_stack=n.get("data", {}).get("techStack", []),
                vibe_context="",
                status="pending"
            ))
            
        for e in graph_data.get("edges", []):
            db.add(EdgeModel(
                id=str(uuid.uuid4()),
                project_id=db_project.id,
                source=e.get("source"),
                target=e.get("target")
            ))
            
        db.commit()
        return graph_data
        
    except Exception as e:
        if "429" in str(e):
             raise HTTPException(status_code=429, detail="Rate limit exceeded. Cooling the Forge...")
        raise HTTPException(status_code=500, detail=str(e))
