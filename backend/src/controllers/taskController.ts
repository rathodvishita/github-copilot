
// src/controllers/taskController.ts
import { Request, Response, NextFunction } from 'express';
import { TaskStatus, TaskPriority } from '../models/enums';
import * as taskService from '../services/taskService';

export const getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allTasks = await taskService.getTasks();
    res.status(200).json(allTasks);
  } catch (err) {
    next(err);
  }
};

export const createNewTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, status, priority, due_date } = req.body;
    const task = await taskService.addTask(
      title,
      description,
      status as TaskStatus,
      priority as TaskPriority,
      due_date ? new Date(due_date) : undefined
    );
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const getTaskById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await taskService.getTaskById(`${req.params.id}`);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, status, priority, due_date } = req.body;
    const updatedTask = await taskService.updateTask(`${req.params.id}`, {
      title,
      description,
      status,
      priority,
      due_date: due_date ? new Date(due_date) : undefined,
    });
    if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(updatedTask);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deleted = await taskService.deleteTask(`${req.params.id}`);
    if (!deleted) return res.status(404).json({ error: 'Task not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
