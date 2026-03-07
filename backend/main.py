from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from api.v1.router import router
from database import engine
from models import Base


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Ensure the SQLite tables exist
    Base.metadata.create_all(bind=engine)
    yield
    # Shutdown logic goes here if needed

app = FastAPI(
    title="IdeaGraph: The Autonomous Architect (V2)",
    version="2.0.0",
    lifespan=lifespan
)

# REPLACED MIDDLEWARE: Specific origins are more stable than "*" for credentials
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)

# Include routers
app.include_router(router, prefix="/api/v1")


@app.get("/")
def read_root():
    return {"status": "online", "message": "Welcome to IdeaGraph V2 AI Engine"}

# ADDED HEALTH CHECK: The frontend "Reconnect" button usually looks for this path


@app.get("/api/v1/health")
def health_check():
    return {"status": "connected", "database": "sqlite_active"}


if __name__ == "__main__":
    import uvicorn
    # V2 Port Lock
    uvicorn.run(app, host="0.0.0.0", port=8001)
