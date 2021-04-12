// import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import logger from './logger';
import getAdress from './adress.service';

const app = express();

app.use(cors());

logger.setName('Entendendo o singleton');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/adress/:cep', (req, res) => {
  getAdress(req, res);
});

const port = 3000;
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);
