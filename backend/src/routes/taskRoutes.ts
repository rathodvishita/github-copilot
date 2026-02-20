// src/routes/taskRoutes.ts
import { Router } from 'express';
import {
  getAllTasks,
  createNewTask,
  getTaskById,
  updateTask,
  deleteTask
} from '../controllers/taskController';

const router = Router();

router.get('/', getAllTasks);
router.post('/', createNewTask);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
