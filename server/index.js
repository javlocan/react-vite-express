import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());

app.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.send("Hello World!");
});

app.get("/hola", function (req, res) {
  res.setHeader("Content-Type", "application/json");

  res.send({ pop: "pup" });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
