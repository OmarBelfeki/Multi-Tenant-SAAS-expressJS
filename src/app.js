const express = require("express");
const cors = require("cors");
require("dotenv").config()
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

() => connectDB();

app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/projects", require("./routes/projectRoutes"));

module.exports = app;
