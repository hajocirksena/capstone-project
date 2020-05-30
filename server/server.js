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
server.use(express.static(path.join(__dirname, "client", "build")));

server.use("/items", items);
server.get("/", (request, response) => {
  response.send("Hallo Welt");
});
server.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build/index.html"));
});

const { PORT = 3000, LOCAL_ADDRESS = "0.0.0.0" } = process.env;
server.listen(PORT, LOCAL_ADDRESS, () => {
  console.log("server listening at", PORT);
});
