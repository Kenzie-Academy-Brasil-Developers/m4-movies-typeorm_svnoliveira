import 'express-async-errors';
import express, { Application } from 'express';
import { handleErrorMiddlewares } from './middlewares';
import { movieRouter } from './routers';

const app: Application = express();
app.use(express.json());

app.use('/movies', movieRouter);

app.use( handleErrorMiddlewares.handleErrors);
export default app;