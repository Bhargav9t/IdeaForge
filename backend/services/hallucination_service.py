from typing import List, Dict, Any

# Known compatible tech stacks
COMPATIBLE_STACKS = {
    "frontend": ["React", "Vue", "Angular", "Svelte"],
    "backend": ["Node.js", "Python", "Java", "Go", "Ruby"],
    "database": ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    "ai": ["TensorFlow", "PyTorch", "OpenAI API", "Google Gemini"]
}

INCOMPATIBLE_PAIRS = [
    ("React", "PHP"),  # Frontend with backend mismatch
    ("Vue", "Java"),   # Not necessarily incompatible, but example
    # Add more as needed
]


def validate_tech_stack(tech_stack: List[str]) -> Dict[str, Any]:
    """
    Validates tech-stack pairings and returns compatibility score/flag.
    Score: 0-100, 100 being fully compatible.
    Flag: True if compatible, False if major issues.
    """
    score = 100
    issues = []

    # Check for incompatible pairs
    for pair in INCOMPATIBLE_PAIRS:
        if all(tech in tech_stack for tech in pair):
            score -= 50
            issues.append(f"Incompatible pair: {pair[0]} and {pair[1]}")

    # Check if stack covers typical categories
    categories_covered = set()
    for tech in tech_stack:
        for category, techs in COMPATIBLE_STACKS.items():
            if tech in techs:
                categories_covered.add(category)

    if len(categories_covered) < 2:
        score -= 20
        issues.append("Stack lacks diversity across categories")

    compatible = score >= 50  # Arbitrary threshold

    return {
        "compatible": compatible,
        "score": score,
        "issues": issues
    }
