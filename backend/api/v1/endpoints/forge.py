import json
import os
import uuid
import random
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
import google.generativeai as genai

from database import get_db
from models import Project as ProjectModel, Node as NodeModel, Edge as EdgeModel

router = APIRouter()

# ==========================================
# GEMINI AI PIPELINE INITIALIZATION (MULTI-KEY ROTATION)
# ==========================================

# THE ARSENAL: Add your keys here. The Forge will randomly pick one every time it runs.
# If one key hits a quota limit, the next request will likely use the other key.
GEMINI_KEYS = [
    "AIzaSyD1PsUVWp4lXHFApgFHm8FASMbXnk0D5So",  # Your first key
    # REPLACE THIS with your second key
    "AIzaSyAlQDlt4SSb9Bkh30ntTkMOiGzJUqg0FIA",
    # REPLACE THIS with your third key (or delete this line if you only have two)
    "AIzaSyDTPJC6xKKOzcLf1CR0E4_V1Da9_ztbDJA"
]


def get_forge_model():
    """
    Skeptical Engineer's safeguard: Rotates API keys randomly per generation
    to spread the quota load and bypass Rate Limit 429 strikes.
    """
    # Pick a random key from the list above
    live_key = random.choice(GEMINI_KEYS)

    # Configure the AI with the chosen key
    genai.configure(api_key=live_key)

    # Return the configured model
    # CRITICAL: We enforce application/json so the AI cannot hallucinate markdown blocks.
    return genai.GenerativeModel(
        model_name='gemini-2.5-flash',
        generation_config={"response_mime_type": "application/json"}
    )


@router.get("/questions/{depth}")
async def generate_questions(depth: str, concept: str):
    """
    REAL AI GENERATION: Dynamically builds questions based on user concept.
    """
    if not concept:
        raise HTTPException(status_code=400, detail="Missing concept idea.")

    depth_map = {"simple": 5, "moderate": 15, "complex": 25}
    num_questions = depth_map.get(depth.lower(), 5)

    # We isolate the schema here to avoid f-string syntax crashes
    json_template = """{
      "questions": [
        {"id": "q1", "text": "What is the primary user base?", "type": "text"},
        {"id": "q2", "text": "Select the database", "type": "select", "options": ["PostgreSQL", "MongoDB"]}
      ]
    }"""

    prompt = f"""
    You are an expert AI Software Architect. The user wants to build: "{concept}".
    Generate exactly {num_questions} highly relevant, deeply technical architectural questions to clarify their requirements.
    Return ONLY a valid JSON object matching this exact schema:
    {json_template}
    """

    try:
        # Grab a fresh model with a rotated key
        forge_engine = get_forge_model()

        response = await forge_engine.generate_content_async(
            prompt,
            generation_config={"temperature": 0.7}
        )
        return json.loads(response.text)

    except Exception as e:
        error_msg = str(e)
        if "429" in error_msg or "quota" in error_msg.lower():
            raise HTTPException(
                status_code=429, detail="API Rate limit exceeded. Cooling the Forge...")
        raise HTTPException(
            status_code=500, detail=f"Gemini Forge Error: {error_msg}")


@router.post("/generate")
async def refine_and_save_graph(request: dict, db: Session = Depends(get_db)):
    """
    REAL AI GENERATION: Translates the concept and answers into a React Flow node graph.
    """
    concept = request.get("concept", "")
    answers = request.get("answers", {})
    user_id = request.get("user_id", "guest_user")

    if not user_id:
        raise HTTPException(status_code=400, detail="Missing user_id")

    prompt = f"""
    Concept: {concept}
    User Answers: {json.dumps(answers)}
    
    Design the complete system architecture graph based on the concept and user answers. 
    Return ONLY a JSON object compatible with React Flow exactly like this:
    {{
      "nodes": [{{"id": "uuid", "type": "skeuomorphic", "data": {{"label": "...", "techStack": ["React"]}}, "position": {{"x": 0, "y": 0}}}}],
      "edges": [{{"id": "e-uuid", "source": "source-uuid", "target": "target-uuid", "type": "patchCable"}}]
    }}
    CRITICAL RULE 1: ALL nodes must have type='skeuomorphic'.
    CRITICAL RULE 2: ALL edges must have type='patchCable'.
    """

    try:
        # Grab a fresh model with a rotated key
        forge_engine = get_forge_model()

        response = await forge_engine.generate_content_async(
            prompt,
            # Low temp forces the AI to be highly structured and logical
            generation_config={"temperature": 0.2}
        )

        graph_data = json.loads(response.text)

        # Save generated JSON into MySQL/SQLite
        db_project = ProjectModel(
            id=str(uuid.uuid4()), user_id=user_id, title=concept[:50] + "...")
        db.add(db_project)
        db.flush()

        for n in graph_data.get("nodes", []):
            db.add(NodeModel(
                id=str(uuid.uuid4()),
                project_id=db_project.id,
                label=n.get("data", {}).get("label", "Unknown"),
                description="AI Provisioned Node",
                # Safely converts list to string for DB
                tech_stack=",".join(n.get("data", {}).get("techStack", [])),
                vibe_context="Gemini Synthesis",
                status="completed"
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
        db.rollback()
        error_msg = str(e)
        if "429" in error_msg or "quota" in error_msg.lower():
            raise HTTPException(
                status_code=429, detail="API Rate limit exceeded. Cooling the Forge...")
        raise HTTPException(
            status_code=500, detail=f"Gemini Blueprint Error: {error_msg}")


@router.get("/stats")
def get_dashboard_stats(db: Session = Depends(get_db)):
    """
    Skeptical Engineer's Metric Fetcher: Pulls actual counts from the DB
    instead of relying on static mock data.
    """
    try:
        # Count the actual rows in your database
        project_count = db.query(ProjectModel).count()
        node_count = db.query(NodeModel).count()

        return {
            "activeProjects": project_count,
            "generatedNodes": node_count,
            "aiStatus": "Optimal",
            "engine": "Gemini 2.5 Flash"
        }
    except Exception as e:
        # Fallback if the DB is still initializing
        return {
            "activeProjects": 0,
            "generatedNodes": 0,
            "aiStatus": "Syncing...",
            "engine": "Offline"
        }
