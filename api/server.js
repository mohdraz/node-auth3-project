const express = require("express");
const apiRouters = require("./api-router");

const configureMiddleware = require("./configure-middleware.js");

const server = express();

configureMiddleware(server);

server.use("/api", apiRouters);

server.get("/", (req, res) => res.send("server is live"));

module.exports = server;
