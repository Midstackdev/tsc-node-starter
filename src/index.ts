import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import errorMiddleware from './middlewares/error.middleware';

const PORT = 5000;

const app: Application = express();

app.use(express.json());
app.use(morgan('common'));
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 60 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message:
      'Too many accounts created from this IP, please try again after an hour',
  })
);

app.post('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello from post',
    data: req.body,
  });
});
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World',
  });
});

app.use(errorMiddleware);

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: 'Not found!, read the API documentation to find your way',
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});

export default app;
