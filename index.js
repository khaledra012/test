require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    message: "Hello CI/CD World! The API is working perfectly.",
    environment: process.env.NODE_ENV,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
