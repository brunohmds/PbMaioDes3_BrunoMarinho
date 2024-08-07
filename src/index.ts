import express from 'express';
import './db/conn';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import eventRoutes from './routes/eventRoutes';
import uploadRoutes from './routes/uploadRoutes';
import setupSwagger from './config/swagger';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

setupSwagger(app);
app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/upload', uploadRoutes);

app.listen(PORT, () => {
  console.log(`Rodando servidor na porta: ${PORT}`);
});

export default app;
