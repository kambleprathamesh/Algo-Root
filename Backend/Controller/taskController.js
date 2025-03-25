import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//***********************************************************************//
// GET ALL TASK //
//***********************************************************************//

export const getAllTask = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    if (!tasks) {
      res.status(404).json({ message: "No Task Found" });
    }
    res.status(200).json({
      status: true,
      data: tasks,
      message: "All Task retrived Succesfully",
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

//***********************************************************************//
//                             CREATE  TASK                              //
//***********************************************************************//

export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({ erro: "Title is Required" });
    }
    const newTask = await prisma.task.create({
      data: { title, description, dueDate },
    });

    console.log("NewTAsk created in controller", newTask);

    return res.status(200).json({
      status: true,
      newTask,
      message: "New Task Created Succesfully",
    });
  } catch (error) {
    console.log("ERROR IN CREATING NEW TASK", error);
    return res.status(500).json({
      status: false,
      message: "Something Went Wrong",
      error: error,
    });
  }
};

//***********************************************************************//
//                             UPDATE  TASK                              //
//***********************************************************************//

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("ID ", id);
    const { title, description, status, dueDate } = req.body;

    //check if task present in db
    const checkExistingTask = await prisma.task.findUnique({
      where: { id: id },
    });

    if (!checkExistingTask) {
      return res.status(404).json({ erro: "Task Not Found" });
    }

    const updateTask = await prisma.task.update({
      where: { id: id },

      data: { title, description, status, dueDate },
    });

    console.log("UPDATED TASK ", updateTask);
    return res.status(200).json({
      status: true,
      message: "TASK UPDATED SUCCESFULLY",
      updateTask,
    });
  } catch (error) {
    console.log("ERROR WHILE UPDATING TASK ", error);
    return res.status(500).json({
      status: false,
      message: "Something Went Wrong",
      error: error,
    });
  }
};

//***********************************************************************//
//                             DELETE  TASK                              //
//***********************************************************************//

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("ID ", id);
    //check if task present in db
    const checkExistingTask = await prisma.task.findUnique({
      where: { id: id },
    });

    if (!checkExistingTask) {
      return res.status(404).json({ erro: "Task Not Found" });
    }

    const deleteTask = await prisma.task.delete({ where: { id: id } });
    console.log("DELETE TASK ", deleteTask);
    return res.status(200).json({
      status: true,
      message: "TASK DELETED  SUCCESFULLY",
      deleteTask,
    });
  } catch (error) {
    console.log("ERROR WHILE DELETING TASK ", error);
    return res.status(500).json({
      status: false,
      message: "Something Went Wrong",
      error: error,
    });
  }
};
