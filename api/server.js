// implement your server here
// require your posts router and connect it here

// Server Variables
const express = require("express");
const postsRouter = require("./posts/posts-router");
const server = express();

// Use Server
server.use(express.json());

server.use("/api/posts", postsRouter);

server.use("*", (req, res) => {
  res.status(404).json({
    message: "error not found",
  });
});

// Exports
module.exports = server;
