# Backend – Node.js (TypeScript, Express) + Postgres (Prisma)

## Overview
The backend is a TypeScript Node.js app (Express-based) using PostgreSQL as the data store and Prisma as the ORM.

## Setup
### 1. Clone and setup Postgres with Docker Compose
```
cd backend
cp .env.example .env           # Or create a new .env file
npm install
# Start Postgres DB
docker-compose up -d
```

### 2. Configure .env
Edit `.env` to set your database URL, for example:
```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/clawboard
```

### 3. Prisma setup
```
npx prisma generate
npx prisma migrate dev
```

### 4. Start the server
```
npm run dev
```

## Docker Compose
A pre-configured docker-compose.yml launches a local Postgres database for development.

## Directory Structure (backend)
- `/prisma/`         — Prisma schema and migrations
- `/src/`            — Application source code
- `/node_modules/`   — Packages
- `docker-compose.yml` — Postgres DB service
- `.env`             — Environment config
