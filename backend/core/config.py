import os
from pydantic import BaseSettings


class Settings(BaseSettings):
    database_url: str = os.getenv("DATABASE_URL", "")
    groq_api_key: str = os.getenv("GROQ_API_KEY", "")

    class Config:
        env_file = ".env"


settings = Settings()
