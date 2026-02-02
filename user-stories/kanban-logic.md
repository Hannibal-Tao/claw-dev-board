# User Story: Kanban Interactions & Ticket Management

**As a** user
**I want** to be able to create, edit, delete, and move tickets
**So that** I can manage my work effectively on the Kanban board.

## Acceptance Criteria

### Backend (API)
- [ ] **Board & Column CRUD**:
  - `POST /boards`
  - `GET /boards/:id`
  - `PATCH /columns/:id` (Update order/name)
- [ ] **Ticket CRUD**:
  - `POST /tickets`
  - `GET /tickets/:id`
  - `PATCH /tickets/:id` (Update title, description, columnId, order)
  - `DELETE /tickets/:id`

### Frontend (UI)
- [ ] **Drag & Drop**:
  - Integrate a library (e.g., `@hello-pangea/dnd`) for ticket movement.
  - Sync movement state with backend.
- [ ] **Ticket Management**:
  - Create Ticket button in columns.
  - Edit Ticket modal.
  - Delete Ticket action.

### Testing
- [ ] Unit tests for ticket movement logic.
- [ ] Integration tests for Ticket API endpoints.
