# Claw Kanban Board – Monorepo Architecture

## Overview
A modern mono-repo for a Kanban board service inspired by Jira.

### Goals
- Mono-repo structure for frontend & backend
- Jira-like Kanban UI ![alt text](image.png)
- Frontend: ReactJS + TypeScript (styled like JIRA)
- Backend: Node.js + TypeScript (+ Express or similar)
- Persistent storage: PostgreSQL DB with Prisma ORM
- API contracts between FE/BE

## Directory Structure

```
claw-dev-board/
├── backend/      # Node.js + TypeScript server, REST APIs, connects to Postgres
│   ├── docker-compose.yml
│   └── README.md
├── frontend/     # ReactJS + TypeScript SPA
│   └── README.md
├── README.md     # Project overview
└── SPEC.md       # Architecture & requirements (this file)
```

## Backend
- Node.js with TypeScript (use Express.js for REST endpoints)
- Prisma ORM for PostgreSQL connection and migrations
- Data models: Board, Column, Ticket, User
- API routes for CRUD and Kanban logic
- Docker Compose setup for dev Postgres

## Database (Postgres + Prisma)
- Persistent backend storage
- Develop using Docker Compose Postgres
- Migration managed by Prisma (schema.prisma)

## Getting Started (Backend)
- Clone repo
- Run `docker-compose up -d` in ./backend to start Postgres
- Install backend deps: `npm install`
- Configure .env (see backend/README.md)
- Use `npx prisma migrate/dev` for schema management

## Future Considerations
- Auth (JWT, Passport.js, or similar)
- Dockerization/devops setup (prod-ready)
- Unit/end-to-end testing frameworks

## Architecture Diagram

```mermaid
graph TB
    subgraph Frontend ["Frontend (React + TS)"]
        UI[User Interface]
        API_Client[API Client]
        UI --> API_Client
    end

    subgraph Backend ["Backend (Node.js + TS)"]
        API_Server["API Server (Express)"]
        Prisma[Prisma ORM]
        API_Server --> Prisma
    end

    subgraph Database ["Database"]
        Postgres[(PostgreSQL)]
    end

    API_Client -- "REST API (JSON)" --> API_Server
    Prisma -- "SQL" --> Postgres
```

