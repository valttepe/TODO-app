import express, { Request, Response, Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import todoRouter from './router/todo';
import bodyParser from 'body-parser';

const app:Application = express();
const PORT = 1337;

app.use(helmet());
app.use(cors());

// parse application/json
app.use(bodyParser.json())


app.use('/todo', todoRouter);

app.get("/", (req:Request, res:Response):void => {
  res.send("Hello Typescript with Node.js!")
  console.log('testing')
});

// wuu
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})