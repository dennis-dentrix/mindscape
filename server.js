import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from server");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});