from typing import List, Dict, Any

# Compatibility rules: incompatible pairs
INCOMPATIBLE_PAIRS = [
    ("Tailwind", "Bootstrap"),
    ("React", "PHP Blade"),
    ("Vue", "Django Template Tags"),
    ("Angular", "JSP"),
    ("Svelte", "ASP.NET Web Forms"),
    ("Node.js", "ColdFusion"),
    ("Python", "Classic ASP"),
    ("Java", "Perl CGI"),
    ("Go", "VB.NET WinForms"),
    ("Ruby", "COBOL"),
    ("PostgreSQL", "MS Access"),
]

# Category mappings
CATEGORIES = {
    "frontend": ["React", "Vue", "Angular", "Svelte", "Next.js"],
    "backend": ["Node.js", "Python", "Java", "Go", "Ruby", "Express", "Django", "Spring"],
    "database": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
    "ai": ["TensorFlow", "PyTorch", "OpenAI API", "Groq"],
    "deployment": ["Docker", "Kubernetes", "AWS", "Vercel", "Heroku"],
    "styling": ["Tailwind", "Bootstrap", "CSS", "Sass"],
}


def check_hallucination(tech_stack: List[str]) -> Dict[str, Any]:
    """
    Scans the tech_stack and returns compatibility_score (0-100) and is_hallucination boolean.
    """
    score = 100
    is_hallucination = False
    issues = []

    # Check incompatible pairs
    for pair in INCOMPATIBLE_PAIRS:
        if all(tech in tech_stack for tech in pair):
            score -= 50
            is_hallucination = True
            issues.append(f"Incompatible: {pair[0]} with {pair[1]}")

    # Check category coverage
    categories_covered = set()
    for tech in tech_stack:
        for category, techs in CATEGORIES.items():
            if tech in techs:
                categories_covered.add(category)

    if len(categories_covered) < 2:
        score -= 20
        issues.append("Insufficient category coverage")

    return {
        "compatibility_score": max(0, score),
        "is_hallucination": is_hallucination,
        "issues": issues
    }
