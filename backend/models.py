from sqlalchemy import Column, String, ForeignKey, JSON, Text
from sqlalchemy.orm import relationship, declarative_base
import uuid

Base = declarative_base()


def gen_uuid():
    return str(uuid.uuid4())


class User(Base):
    __tablename__ = "users"
    id = Column(String(36), primary_key=True, default=gen_uuid)
    email = Column(String(255), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)

    projects = relationship("Project", back_populates="user", cascade="all, delete-orphan")


class Project(Base):
    __tablename__ = "projects"
    id = Column(String(36), primary_key=True, default=gen_uuid)
    user_id = Column(String(36), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(255))
    status = Column(String(50), default="active") # For active/completed stats

    user = relationship("User", back_populates="projects")
    nodes = relationship("Node", back_populates="project",
                         cascade="all, delete-orphan")
    edges = relationship("Edge", back_populates="project",
                         cascade="all, delete-orphan")


class Node(Base):
    __tablename__ = "nodes"
    id = Column(String(36), primary_key=True, default=gen_uuid)
    project_id = Column(String(36), ForeignKey(
        "projects.id", ondelete="CASCADE"), nullable=False)
    label = Column(String(255))
    description = Column(Text)
    tech_stack = Column(JSON)
    vibe_context = Column(Text)
    status = Column(String(50))

    project = relationship("Project", back_populates="nodes")


class Edge(Base):
    __tablename__ = "edges"
    id = Column(String(36), primary_key=True, default=gen_uuid)
    project_id = Column(String(36), ForeignKey(
        "projects.id", ondelete="CASCADE"), nullable=False)
    source = Column(String(36), nullable=False)
    target = Column(String(36), nullable=False)

    project = relationship("Project", back_populates="edges")
