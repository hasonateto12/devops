const express = require("express");
const { add } = require("./math");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`<h1>DevOps CI/CD Demo</h1><p>2 + 3 = ${add(2, 3)}</p>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
