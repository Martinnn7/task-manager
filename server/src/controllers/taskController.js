import prisma from "../config/prisma.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({
        message: "Title and userId is required",
      });
    }

    const task = await prisma.task.create({
      data: { 
            title, 
            description, 
            userId 
        },
    });

    return res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export const getTasks = async (req, res) => {
  try {
    const { userId, search, status } = req.query;

    if(!userId) {
      return res.status(401).json({
        message: "userId is required"
      });
    }

    const where = {
      userId: Number(userId),
    };
    
    if(search) {
      where.title = {
        contains: search,
        mode: "insensitive"
      }
    }

    if(status == "completed") {
      where.completed = true;
    }

    if(status == "active") {
      where.completed = false;
    }

    const tasks = await prisma.task.findMany({
    where,
      orderBy: {
        createdAt: "desc",
      }
    });

    return res.status(200).json(tasks);

  } catch(error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const task = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        description,
      },
    });

    return res.status(200).json({
      message: "Task updated successfully"
    });

  } catch(error) {
    console.log(error);
    
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export const toggleTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    const updatedTask = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        completed: !task.completed,
      },
    });

    return res.status(200).json({
      message: "Task status updated successfully",
      task: updatedTask,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if(!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    const deleteTask = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(200).json({
      message: "Task deleted successfully"
    });

  } catch(error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error"
    });
  }
}