# User Story: Project Initialization & Infrastructure

**As a** developer
**I want** a stable, running backend and frontend environment with Dockerized database
**So that** I can begin building core features on a solid foundation.

## Acceptance Criteria

### Backend
- [ ] Dependencies installed (`npm install`).
- [ ] Postgres running via Docker Compose.
- [ ] Server starts (`npm run dev` or similar) and successfully connects to the DB.
- [ ] Basic health check endpoint returns 200 OK.

### Frontend
- [ ] React + TypeScript + Vite project initialized in `frontend/`.
- [ ] Basic project structure (src, components) set up.
- [ ] App runs locally (`npm run dev`).

### General
- [ ] `concurrently` (or similar) set up in root to run both services if applicable, or documented how to run.
- [ ] CI/CD workflow (optional for this stage, but good to have) or at least a lint check.
