// src/services/taskService.ts
import { tasks, createTask, Task } from '../models/task';
import { TaskStatus, TaskPriority } from '../models/enums';

export async function getTasks(): Promise<Task[]> {
 return tasks.slice().sort((a, b) => {
    const priorityOrder = {
      [TaskPriority.HIGH]: 3,
      [TaskPriority.MEDIUM]: 2,
      [TaskPriority.LOW]: 1,
    };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    if (a.due_date && b.due_date) {
      return a.due_date.getTime() - b.due_date.getTime();
    }
    if (a.due_date) return -1;
    if (b.due_date) return 1;
    return 0;
  });}

export async function getTaskById(id: string): Promise<Task | undefined> {
  return tasks.find(t => t.id === id);
}

export async function addTask(
  title: string,
  description: string | undefined,
  status: TaskStatus,
  priority: TaskPriority,
  due_date: Date | undefined
): Promise<Task> {
  // High priority only if due date is within 7 days
  if (priority === TaskPriority.HIGH && due_date) {
    const now = new Date();
    const diffDays = Math.ceil((due_date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays > 7) {
      throw new Error('High priority tasks must have a due date within 7 days');
    }
  }
  return createTask(title, description, status, priority, due_date);
}

export async function updateTask(
  id: string,
  data: Partial<Omit<Task, 'id' | 'created_at' | 'updated_at'>>
): Promise<Task | undefined> {
  const task = tasks.find(t => t.id === id);
  if (!task) return undefined;
  Object.assign(task, data);
  task.updated_at = new Date();
  return task;
}

export async function deleteTask(id: string): Promise<boolean> {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return false;
  tasks.splice(idx, 1);
  return true;
}
