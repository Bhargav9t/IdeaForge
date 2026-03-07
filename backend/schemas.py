from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from uuid import UUID, uuid4


# User Schemas
class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str
    user_id: str

class UserResponse(BaseModel):
    id: UUID
    email: str

# Node & Edge Schemas
class Node(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    label: str
    description: str
    tech_stack: List[str]
    vibe_context: str
    status: str

class Edge(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    source: str
    target: str

# Project Schemas
class Project(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    user_id: UUID
    nodes: List[Node]
    edges: List[Edge]
    title: Optional[str] = None
    status: str

class GenerateRequest(BaseModel):
    prompt: str
    title: Optional[str] = None
    depth: str = "simple"

class ProjectStats(BaseModel):
    total: int
    active: int
    completed: int

class SystemHealth(BaseModel):
    users: int
    projects: int
    nodes: int
    edges: int
    groq_latency_ms: float
