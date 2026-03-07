from fastapi import APIRouter
from .endpoints.auth import router as auth_router
from .endpoints.projects import router as projects_router
from .endpoints.forge import router as forge_router
from .endpoints.admin import router as admin_router

router = APIRouter()
router.include_router(auth_router, prefix="/auth", tags=["auth"])
router.include_router(projects_router, prefix="/projects", tags=["projects"])
router.include_router(forge_router, prefix="/forge", tags=["forge"])
router.include_router(admin_router, prefix="/admin", tags=["admin"])
