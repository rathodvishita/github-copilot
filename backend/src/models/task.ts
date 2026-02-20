// src/models/task.ts
import { TaskStatus, TaskPriority } from './enums';
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  due_date?: Date;
  created_at: Date;
  updated_at: Date;
}

export const tasks: Task[] = [];

export function createTask(
  title: string,
  description: string | undefined,
  status: TaskStatus,
  priority: TaskPriority,
  due_date: Date | undefined
): Task {
  const now = new Date();
  const task: Task = {
    id: uuidv4(),
    title,
    description,
    status,
    priority,
    due_date,
    created_at: now,
    updated_at: now,
  };
  tasks.push(task);
  return task;
}
