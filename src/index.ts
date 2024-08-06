import express from 'express';
import './db/conn';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import eventRoutes from './routes/eventRoutes';
import setupSwagger from './config/swagger';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

setupSwagger(app);
app.use(userRoutes);
app.use(eventRoutes);

app.listen(PORT, () => {
  console.log(`Running server on port: ${PORT}`);
});

export default app;
