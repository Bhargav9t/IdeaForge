from groq import AsyncGroq
import json
from typing import Dict, Any

client = AsyncGroq(api_key="[PASTE_YOUR_GROQ_API_KEY_HERE]")


async def generate_graph(user_prompt: str) -> Dict[str, Any]:
    """
    Uses Groq's JSON mode to generate a list of Nodes and Edges.
    """
    prompt = f"""
    Generate a JSON object with 'nodes' and 'edges' arrays for an architectural graph based on: {user_prompt}

    Focus on 'Vibe-Coding' metadata: include tech_stack as array, vibe_context as descriptive text.

    Nodes format: {{"id": "valid UUID4 string", "label": "string", "description": "string", "tech_stack": ["list"], "vibe_context": "string", "status": "string"}}
    Edges format: {{"id": "valid UUID4 string", "source": "node_id", "target": "node_id"}}

    Ensure all IDs are valid UUID4 strings. Return only valid JSON.
    """

    try:
        response = await client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"}
        )
        content = response.choices[0].message.content
        graph_data = json.loads(content)
        return graph_data
    except Exception as e:
        raise Exception(f"Groq API error: {str(e)}")
