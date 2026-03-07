from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import text
from sqlalchemy.orm import Session
from database import get_db
import time
from models import User, Project as ProjectModel, Node, Edge
from schemas import SystemHealth

router = APIRouter()

@router.get("/system-health", response_model=SystemHealth)
async def get_system_health(db: Session = Depends(get_db)):
    """
    Hidden admin endpoint that returns total row counts from all tables and a simulated Groq API latency.
    """
    try:
        users_count = db.query(User).count()
        projects_count = db.query(ProjectModel).count()
        nodes_count = db.query(Node).count()
        edges_count = db.query(Edge).count()
        
        # Simulate an API ping or we can measure a real one
        start_time = time.time()
        # Simulated Groq latency query (just testing db right now since groq requires valid prompt for ping usually)
        db.execute(text("SELECT 1")).fetchone()
        latency_ms = (time.time() - start_time) * 1000 + 45.0 # Add ~45ms simulated external latency
        
        return SystemHealth(
            users=users_count,
            projects=projects_count,
            nodes=nodes_count,
            edges=edges_count,
            groq_latency_ms=round(latency_ms, 2)
        )
    except Exception as e:
        raise HTTPException(status_code=503, detail=f"Database unavailable: {str(e)}")
