import express, { Application, Request, Response } from 'express';

const PORT = 5000;

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World',
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});

export default app;
