// src/app.ts
import express from 'express';
import taskRoutes from './routes/taskRoutes';
import { errorHandler } from './middleware/errorHandler';
import {
  validateTask,
} from './middleware/validationMiddleware';

const app = express();

app.use(express.json());
// Task routes
app.use('/tasks', taskRoutes);

// Centralized error handler
app.use(errorHandler);

export default app;
