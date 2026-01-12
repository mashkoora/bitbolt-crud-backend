require("dotenv").config();

console.log("SERVER FILE STARTED");

const express = require("express");
const cors = require("cors");
require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", require("./routes/userRoutes"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
