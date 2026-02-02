import express from 'express';
import userRoutes from './routes/users';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Claw Kanban API');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
