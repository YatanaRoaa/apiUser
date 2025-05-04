// server/index.js
const cors = require("cors");
const express = require("express");
const routes = require("../routes");

const server = express();
server.use(cors());
server.options("*", cors());
server.use(express.json());
server.use("/api", routes);

// error handler
server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Error interno" });
});

module.exports = server;

