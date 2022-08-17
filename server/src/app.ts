// Express API Code Of typescript
import express, { Application, Request, Response, NextFunction } from "express";
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
import * as bodyParser from 'body-parser';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", require("./routes/api.route"));

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError.NotFound());
});

interface Error {
  status?: number;
  message?: string;
}

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: err,
  });
});

app.listen(PORT, () => {
  console.log(`App Listening to PORT : ${PORT}`);
});


