import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Create a Default User
  const user = await prisma.user.upsert({
    where: { email: 'dev@openclaw.ai' },
    update: {},
    create: {
      email: 'dev@openclaw.ai',
      name: 'Dev Admin',
    },
  });

  // 2. Create a Default Board
  const board = await prisma.board.create({
    data: {
      name: 'Main Dev Board',
    },
  });

  // 3. Create Default Columns
  const todoCol = await prisma.column.create({
    data: {
      name: 'To Do',
      order: 0,
      boardId: board.id,
    },
  });

  const inProgressCol = await prisma.column.create({
    data: {
      name: 'In Progress',
      order: 1,
      boardId: board.id,
    },
  });

  const doneCol = await prisma.column.create({
    data: {
      name: 'Done',
      order: 2,
      boardId: board.id,
    },
  });

  // 4. Create initial Tickets
  await prisma.ticket.create({
    data: {
      title: 'Initialize Workspace',
      desc: 'Setup monorepo and initial dependencies',
      order: 0,
      columnId: todoCol.id,
      assigneeId: user.id,
    },
  });

  await prisma.ticket.create({
    data: {
      title: 'Backend Core',
      desc: 'Implement user and board CRUD',
      order: 1,
      columnId: todoCol.id,
    },
  });

  console.log({
    message: 'Seed data created successfully',
    boardId: board.id,
    adminEmail: user.email,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
