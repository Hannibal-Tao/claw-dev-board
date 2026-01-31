# Claw Kanban Board – Monorepo Architecture

## Overview
A modern mono-repo for a Kanban board service inspired by Jira.

### Goals
- Mono-repo structure for frontend & backend
- Jira-like Kanban UI
- Frontend: ReactJS + TypeScript (styled like JIRA)
- Backend: Node.js + TypeScript (+ Express or similar)
- API contracts between FE/BE

## Directory Structure

```
claw-dev-board/
├── backend/      # Node.js + TypeScript server, REST APIs
│   └── README.md
├── frontend/     # ReactJS + TypeScript SPA
│   └── README.md
├── README.md     # Project overview
└── SPEC.md       # Architecture & requirements (this file)
```

## Frontend
- ReactJS (using Create React App or Vite)
- TypeScript for type safety
- Component structure reflects Kanban features: Board, Columns, Tickets, Drag-and-drop
- UI/UX inspired by Jira: similar colors, layouts, experience
- Connects to backend API for board/ticket data

## Backend
- Node.js with TypeScript (use Express.js for REST endpoints)
- Data models: Board, Column, Ticket, User
- API routes for CRUD on boards, columns, and tickets
- (Optional) Use in-memory storage or Postgres for MVP

## Future Considerations
- Auth (JWT, Passport.js, or similar)
- Dockerization/devops setup
- Unit/end-to-end testing frameworks
