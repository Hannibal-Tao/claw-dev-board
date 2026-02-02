# Claw Kanban Board – Monorepo

A modern Kanban board implementation inspired by JIRA, built with React, Node.js, and Prisma.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v20+)
- Docker (for PostgreSQL)

### 2. Backend Setup
```bash
cd backend
npm install
docker-compose up -d  # Starts PostgreSQL
npx prisma migrate dev --name init
npx prisma db seed    # Initializes Board ID 1
npm run dev           # API starts on http://localhost:3001
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev           # App starts on http://localhost:5173
```

## 🛠 Tech Stack
- **Frontend:** React 19, TypeScript, Vite, `@hello-pangea/dnd`
- **Backend:** Node.js, Express, Prisma ORM
- **Database:** PostgreSQL (Docker)

## 📖 Features
- **Kanban Board:** Horizontal columns with task cards.
- **Drag & Drop:** Move tickets between columns with persistence.
- **Ticket Management:** Create, update, and delete tickets via API.
- **Responsive Layout:** Sidebar and Header navigation.
