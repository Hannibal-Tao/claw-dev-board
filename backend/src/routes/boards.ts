import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create Board
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const board = await prisma.board.create({
      data: { name },
    });
    res.json(board);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create board' });
  }
});

// Get Board with Columns and Tickets
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const board = await prisma.board.findUnique({
    where: { id: Number(id) },
    include: {
      columns: {
        orderBy: { order: 'asc' },
        include: {
          tickets: {
            orderBy: { order: 'asc' },
          },
        },
      },
    },
  });
  if (board) {
    res.json(board);
  } else {
    res.status(404).json({ error: 'Board not found' });
  }
});

export default router;
