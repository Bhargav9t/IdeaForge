import google.generativeai as genai
from core.config import settings
import json
from typing import Dict, Any

genai.configure(api_key=settings.gemini_api_key)
# Using available model, adjust if needed
model = genai.GenerativeModel('gemini-1.5-flash')


def generate_graph_json(prompt: str) -> Dict[str, Any]:
    """
    Prompts Gemini to generate a JSON graph with nodes and edges.
    """
    full_prompt = f"""
    Generate a JSON object representing a graph for an idea or project architecture.
    The JSON should have 'nodes' and 'edges' arrays.

    Nodes should have: id (string), type (string, e.g., 'component', 'service'), data (object with label and other properties).

    Edges should have: id (string), source (node id), target (node id), type (string, e.g., 'depends_on').

    Based on this idea: {prompt}

    Return only valid JSON, no extra text.
    """
    response = model.generate_content(full_prompt)
    try:
        graph_data = json.loads(response.text.strip())
        return graph_data
    except json.JSONDecodeError:
        # Fallback or error handling
        return {"nodes": [], "edges": []}
