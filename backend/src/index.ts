import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = process.env.PORT || 4000;
const prisma = new PrismaClient();

app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Server start
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
