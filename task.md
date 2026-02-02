# Task List - Claw Kanban Board

## 1. Project Initialization & Infrastructure
- [ ] **Backend Setup**
  - [ ] Install dependencies (`npm install`).
  - [ ] Verify Docker Compose configuration for Postgres.
  - [ ] Ensure server starts and connects to DB.
  - [ ] Create `user-stories/infra-setup.md`.
- [ ] **Frontend Initialization**
  - [ ] Initialize React + TypeScript project (Vite) in `frontend/`.
  - [ ] Setup basic folder structure.
  - [ ] Install UI dependencies (styling, state management).
- [ ] **Repo Configuration**
  - [ ] Setup `concurrently` or similar to run both FE/BE.
  - [ ] Create initial PR for base setup.

## 2. Database & Backend Core
- [ ] **Database Schema**
  - [ ] Define `User`, `Board`, `Column`, `Ticket` in `schema.prisma`.
  - [ ] Run initial migration.
- [ ] **API Implementation**
  - [ ] Implement `User` CRUD.
  - [ ] Implement `Board` & `Column` CRUD.
  - [ ] Implement `Ticket` CRUD.
  - [ ] Write integration tests for API endpoints.
  - [ ] Create `user-stories/backend-core.md`.

## 3. Frontend Core & Board UI
- [ ] **API Client**
  - [ ] Setup axios/fetch client with types.
- [ ] **Board Layout**
  - [ ] Implement Main Layout (Sidebar/Header).
  - [ ] Implement Kanban Board view (Horizontal Columns).
  - [ ] Create `user-stories/frontend-ui.md`.

## 4. Kanban Interactions
- [ ] **Drag & Drop**
  - [ ] Implement Drag & Drop for Tickets between Columns.
  - [ ] Implement Drag & Drop for Column reordering (optional but good).
- [ ] **Ticket Management**
  - [ ] Create/Edit Ticket Modal.
  - [ ] Delete Ticket.
  - [ ] Create `user-stories/kanban-logic.md`.

## 5. Final Polish
- [ ] End-to-end testing.
- [ ] Update README with run instructions.
