from ollama import AsyncClient
import json
from typing import Dict, Any

client = AsyncClient()


async def generate_graph(user_prompt: str) -> Dict[str, Any]:
    """
    Uses Ollama's JSON mode to generate a list of Nodes and Edges.
    """
    prompt = f"""
    Generate a JSON object with 'nodes' and 'edges' arrays for an architectural graph based on: {user_prompt}

    Focus on 'Vibe-Coding' metadata: include tech_stack as array, vibe_context as descriptive text.

    Nodes format: {{"id": "valid UUID4 string", "label": "string", "description": "string", "tech_stack": ["list"], "vibe_context": "string", "status": "string"}}
    Edges format: {{"id": "valid UUID4 string", "source": "node_id", "target": "node_id"}}

    Ensure all IDs are valid UUID4 strings. Return only valid JSON.
    """

    try:
        response = await client.chat(
            model="llama3:8b",
            messages=[{"role": "user", "content": prompt}],
            format="json"
        )
        content = response['message']['content']
        graph_data = json.loads(content)
        return graph_data
    except Exception as e:
        raise Exception(f"Ollama API error: {str(e)}")
