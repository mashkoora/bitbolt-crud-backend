require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
require("./db");

const app = express();

/* 🔴 THESE MUST COME BEFORE ROUTES */
app.use(cors());              // <-- VERY IMPORTANT
app.use(express.json());      // <-- VERY IMPORTANT

/* ROUTES */
app.use("/users", userRoutes);

/* OPTIONAL ROOT TEST */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
