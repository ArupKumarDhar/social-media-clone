const express = require("express");
const app = express();
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Dotenv
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
readdirSync("./routes").map((f) => app.use("/", require("./routes/" + f)));

// Database
mongoose.connect(process.env.DATABASE_URL, () => {
  console.log("Database connected");
});
// Port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
