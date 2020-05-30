import express, { request } from "express";
import bodyParser from "body-parser";
import items from "./Items";

const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json({ extended: true }));
server.use(express.json());
server.use(express.static("../client/build/index.html"));

server.use("/items", items);

server.get("*", (request, response) => {
  response.sendFile("../client/build/index.html");
});

const PORT = process.env.PORT || 3000;
const localAddress = process.env.LOCAL_ADDRESS || "127.0.0.1";
server.listen(PORT, localAddress, () => {
  console.log(`Our app is running on port ${PORT}`);
});
