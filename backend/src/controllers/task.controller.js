const prisma = require("../config/db");

exports.createTask = async (req, res) => {
  const task = await prisma.task.create({
    data: {
      title: req.body.title,
      description: req.body.description,
      userId: req.user.userId
    }
  });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await prisma.task.findMany({
    where: { userId: req.user.userId }
  });
  res.json(tasks);
};
