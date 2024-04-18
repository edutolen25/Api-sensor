import express from 'express';
import morgan from 'morgan';
import SensorRouter from './routes/SensorRouter.js';
import { config } from 'dotenv';

const app = express();
config();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))

app.use('/api', SensorRouter);

export default app;
