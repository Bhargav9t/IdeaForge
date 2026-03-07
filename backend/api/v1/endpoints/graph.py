from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session
from database import get_db
from models import Graph as GraphModel, Node as NodeModel, Edge as EdgeModel
from schemas import Graph, Node, Edge, GenerateRequest, ForkResponse, ExportVibeResponse
from services.ollama_service import generate_graph
from services.hallucination_guard import check_hallucination
from typing import Optional
import uuid

router = APIRouter()


def create_graph(graph: Graph, db: Session) -> str:  # type: ignore
    # persist graph and its nodes/edges transactionally
    db_graph = GraphModel(id=str(uuid.uuid4()), title=graph.title)
    db.add(db_graph)
    db.flush()

    for node in graph.nodes:
        db.add(NodeModel(
            id=str(node.id),
            graph_id=db_graph.id,
            label=node.label,
            description=node.description,
            tech_stack=node.tech_stack,
            vibe_context=node.vibe_context,
            status=node.status
        ))
    for edge in graph.edges:
        db.add(EdgeModel(
            id=str(edge.id),
            graph_id=db_graph.id,
            source=edge.source,
            target=edge.target
        ))

    db.commit()
    return db_graph.id


def get_graph(graph_id: str, db: Session) -> GraphModel:  # type: ignore
    result = db.execute(select(GraphModel).where(GraphModel.id == graph_id))
    graph = result.scalars().first()
    if not graph:
        raise HTTPException(status_code=404, detail="Graph not found")
    return graph


def get_node(node_id: str, db: Session) -> NodeModel:  # type: ignore
    result = db.execute(select(NodeModel).where(NodeModel.id == node_id))
    node = result.scalars().first()
    if not node:
        raise HTTPException(status_code=404, detail="Node not found")
    return node


@router.post("/generate", response_model=Graph)
async def generate_graph_endpoint(request: GenerateRequest, db: Session = Depends(get_db)):
    """
    Calls Ollama and returns the graph.
    """
    try:
        graph_data = await generate_graph(request.prompt)
        nodes = [Node(**node) for node in graph_data.get('nodes', [])]
        edges = [Edge(**edge) for edge in graph_data.get('edges', [])]

        # Check hallucination for each node
        for node in nodes:
            check = check_hallucination(node.tech_stack)
            if check['is_hallucination']:
                raise HTTPException(
                    status_code=400, detail=f"Hallucination detected in node {node.id}: {check['issues']}")

        graph = Graph(nodes=nodes, edges=edges, title=request.title)
        graph_id = create_graph(graph, db)
        graph.id = graph_id
        return graph
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/fork/{graph_id}", response_model=ForkResponse)
def fork_graph(graph_id: str, db: Session = Depends(get_db)):
    """
    Logic to duplicate a graph (generate new UUIDs for all nodes/edges).
    """
    try:
        original = get_graph(graph_id, db)
        new_nodes = [Node(id=str(uuid.uuid4()), label=node.label, description=node.description,
                          tech_stack=node.tech_stack, vibe_context=node.vibe_context, status=node.status) for node in original.nodes]
        old_to_new = {str(old.id): str(new.id)
                      for old, new in zip(original.nodes, new_nodes)}
        new_edges = [Edge(id=str(uuid.uuid4()), source=old_to_new[edge.source],
                          target=old_to_new[edge.target]) for edge in original.edges]
        new_graph = Graph(nodes=new_nodes, edges=new_edges,
                          title=f"Fork of {original.title}")
        new_id = create_graph(new_graph, db)
        new_graph.id = new_id
        return ForkResponse(graph=new_graph)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/export-vibe/{node_id}", response_model=ExportVibeResponse)
def export_vibe(node_id: str, db: Session = Depends(get_db)):
    """
    Generates a high-quality Markdown prompt for 'Vibe-Coding' (Cursor/Claude) to build that specific milestone.
    """
    try:
        node = get_node(node_id, db)
        markdown = f"""
# Vibe-Coding Prompt for {node.label}

## Description
{node.description}

## Vibe Context
{node.vibe_context}

## Tech Stack
{", ".join(node.tech_stack)}

## Status
{node.status}

## Implementation Guide
Build this component using the specified tech stack. Ensure compatibility and best practices.
"""
        return ExportVibeResponse(markdown=markdown.strip())
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
