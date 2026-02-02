import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create Ticket
router.post('/', async (req, res) => {
  const { title, desc, columnId, order, assigneeId } = req.body;
  try {
    const ticket = await prisma.ticket.create({
      data: {
        title,
        desc,
        columnId: Number(columnId),
        order: Number(order) || 0,
        assigneeId: assigneeId ? Number(assigneeId) : null,
      },
    });
    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create ticket' });
  }
});

// Update Ticket (Movement/Edit)
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, desc, columnId, order, assigneeId } = req.body;
  try {
    const ticket = await prisma.ticket.update({
      where: { id: Number(id) },
      data: {
        title,
        desc,
        columnId: columnId ? Number(columnId) : undefined,
        order: order !== undefined ? Number(order) : undefined,
        assigneeId: assigneeId !== undefined ? (assigneeId ? Number(assigneeId) : null) : undefined,
      },
    });
    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update ticket' });
  }
});

// Delete Ticket
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.ticket.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete ticket' });
  }
});

export default router;
