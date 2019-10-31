import express from 'express';
import bodyParser from 'body-parser';
import { userRouter, questionRouter } from './routes';

const app = express();
const previx = '/api/v1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// all routes shall be added here
app.use(`${previx}/users`, userRouter);
app.use(`${previx}/questions`, questionRouter);

app.get(previx, (req, res) =>
  res.send({
    message: 'StackOverFlow Lite now online:'
  })
);
export default app;
