// src/middleware/validationMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import {  TaskStatus, TaskPriority } from '../models/enums';

function isValidEnum<T extends object>(value: any, enumObj: T): boolean {
  return Object.values(enumObj).includes(value);
}

export function validateTask(req: Request, res: Response, next: NextFunction) {
  const { title, status, priority } = req.body;
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'Title is required and must be a string.' });
  }
  if (!isValidEnum(status, TaskStatus)) {
    return res.status(400).json({ error: 'Invalid task status.' });
  }
  if (!isValidEnum(priority, TaskPriority)) {
    return res.status(400).json({ error: 'Invalid task priority.' });
  }
  next();
}

