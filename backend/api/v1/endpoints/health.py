from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session
from database import get_db
from ollama import AsyncClient
import time
import uuid

router = APIRouter()

ollama_client = AsyncClient()


@router.get("/ai")
async def check_ai_health():
    """
    Check Ollama AI service health by attempting to list models.
    """
    try:
        # Simple ping by listing models
        response = await ollama_client.list()
        # If we get here, Ollama is running
        return {"status": "healthy", "service": "Ollama", "model": "llama3"}
    except Exception as e:
        raise HTTPException(
            status_code=503, detail=f"AI service unavailable: {str(e)}")


@router.get("/db")
async def check_db_health(db: Session = Depends(get_db)):
    """
    Check database health by executing a simple SELECT 1 query and measuring latency.
    """
    try:
        start_time = time.time()
        # Execute a simple query
        result = db.execute(text("SELECT 1"))
        result.fetchone()
        latency = time.time() - start_time
        return {
            "status": "healthy",
            "service": "TiDB",
            "latency_ms": round(latency * 1000, 2),
            "uuid_format": str(uuid.uuid4())  # Example UUID VARCHAR 36
        }
    except Exception as e:
        raise HTTPException(
            status_code=503, detail=f"Database unavailable: {str(e)}")
