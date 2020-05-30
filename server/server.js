import express from "express";
import bodyParser from "body-parser";
import items from "./Items";

const path = require("path");
const server = express();
const port = process.env.PORT || 8050;
const dotenv = require("dotenv");
dotenv.config();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json({ extended: true }));
server.use(express.json());
server.use(express.static(path.join(__dirname, "client", "build")));

server.use("/items", items);

server.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build/index.html"));
});

server.listen(port || 8050);
