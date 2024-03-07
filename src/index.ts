import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes';

dotenv.config();

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const app = express();
app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});