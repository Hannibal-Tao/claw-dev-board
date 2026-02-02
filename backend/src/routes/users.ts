import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Create User
router.post('/', async (req, res) => {
  const { email, name } = req.body;
  try {
    const user = await prisma.user.create({
      data: { email, name },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'User already exists' });
  }
});

// Get User
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { tickets: true },
  });
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// List Users
router.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

export default router;
