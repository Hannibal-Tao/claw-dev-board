# User Story: Backend Core & Database

**As a** backend developer
**I want** to have the database schema defined and core CRUD APIs implemented
**So that** the frontend can start consuming real data.

## Acceptance Criteria

### Database
- [ ] Schema defined in `schema.prisma`:
  - `User` (id, email, name, avatar)
  - `Board` (id, title, ownerId)
  - `Column` (id, title, order, boardId)
  - `Ticket` (id, title, description, order, columnId, assigneeId)
- [ ] Migration run successfully against local Postgres.

### API (Express)
- [ ] **User CRUD**:
  - `POST /users` (Create)
  - `GET /users/:id` (Read)
  - `GET /users` (List)
- [ ] **Board CRUD**:
  - `POST /boards`
  - `GET /boards`
- [ ] Error handling middleware implemented.

### Testing
- [ ] Integration tests for User creation and retrieval.
