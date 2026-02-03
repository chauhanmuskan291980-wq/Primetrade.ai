const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routers");
const taskRoutes = require("./routes/task.routers");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
const swaggerDoc = YAML.load("./swagger.yaml");

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

module.exports = app;
