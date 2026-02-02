# Claw Kanban Board – Monorepo

A modern Kanban board implementation inspired by JIRA, built with React, Node.js, and Prisma.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v20+)
- Docker (for PostgreSQL)

### 2. Backend Setup
```bash
cd backend
pnpm install
docker compose up -d  # Starts PostgreSQL from root
npx prisma migrate dev --name init
npx prisma db seed    # Initializes Board ID 1
pnpm dev              # API starts on http://localhost:3001
```

### 3. Frontend Setup
```bash
cd frontend
pnpm install
pnpm dev              # App starts on http://localhost:5173
```

### 4. Running with Docker (Consolidated)
From the root directory:
```bash
docker compose up --build -d
```
The application will be available at:
- **Frontend:** http://localhost (via Nginx proxy)
- **Backend API:** http://localhost/api/

### 5. Running E2E Tests
```bash
npx playwright test
```

## 🛠 Tech Stack
- **Frontend:** React 19, TypeScript, Vite, `@hello-pangea/dnd`, pnpm
- **Backend:** Node.js, Express, Prisma ORM, pnpm
- **Database:** PostgreSQL (Docker)

## 📖 Features
- **Kanban Board:** Horizontal columns with task cards.
- **Drag & Drop:** Move tickets between columns with persistence.
- **Ticket Management:** Create, update, and delete tickets via API.
- **Responsive Layout:** Sidebar and Header navigation.
