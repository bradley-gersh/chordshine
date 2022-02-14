const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();
app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/public/:resource", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public/" + req.params.resource));
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

process.on("SIGINT", () => {
  console.log(" SIGINT received.");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log(" SIGTERM received.");
  process.exit(1);
});

module.exports = app;
