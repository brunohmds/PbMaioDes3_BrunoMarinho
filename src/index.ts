import express, { Request, Response } from 'express';
import './db/conn';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  return res.send('Teste');
});

app.listen(PORT, () => {
  console.log(`Running server on port: ${PORT}`);
});
