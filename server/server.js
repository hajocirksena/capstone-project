import express from "express";
import bodyParser from "body-parser";
import items from "./Items";

const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json({ extended: true }));
server.use(express.json());
server.use(express.static(path.join(__dirname, "../client/build")));

server.use("/items", items);

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build"));
});

const PORT = process.env.PORT || 8050;
const localAddress = process.env.LOCAL_ADDRESS || "localhost:8050";
server.listen(PORT, localAddress, () => {
  console.log(`Our app is running on port ${PORT}`);
});
