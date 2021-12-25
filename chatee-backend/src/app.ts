import express, { Request, Response, NextFunction } from "express";
import CreateHttpError from "http-errors";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(
  express.json({
    limit: "20mb",
  })
);
app.use(cors());

app.use(morgan(":method :url HTTP/:http-version :status :response-time"));

const PORT = 3000;

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(CreateHttpError(400, "This is Wrong Route!"));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || "Something Went Wrong!",
  });
});

app.listen(PORT, () => {
  return console.log(`Server started at: http://localhost:${PORT}`);
});
