import express, { Express, Request, Response } from "express";

const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO WORLDsss");
});

app.listen(port, () => {
  console.log("server is running");
});
