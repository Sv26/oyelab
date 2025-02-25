const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/database");

const app = express();

// ✅ Ensure middleware runs before routes
app.use(cors());
app.use(express.json()); // This must be here
app.use(express.urlencoded({ extended: true })); // Add this to parse URL-encoded requests

// ✅ Routes
app.use("/api", userRoutes);

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

module.exports = app;
