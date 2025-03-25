import express from "express";
import {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
} from "../Controller/taskController.js";

const router = express.Router();

router.get("/", getAllTask); // Get all tasks
router.post("/create", createTask); // Create a task
router.put("/update/:id", updateTask); // Update a task
router.delete("/delete/:id", deleteTask); // Delete a task

export default router;
