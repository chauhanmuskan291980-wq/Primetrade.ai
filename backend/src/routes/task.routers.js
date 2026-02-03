const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { createTask, getTasks } = require("../controllers/task.controller");

router.use(auth);

router.post("/", createTask);
router.get("/", getTasks);

module.exports = router;
