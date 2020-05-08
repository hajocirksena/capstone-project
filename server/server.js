import express from "express";
import bodyParser from "body-parser";
import items from "./items";

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json({ extended: true }));

server.use("/Items", items);

server.listen(8050, () => console.log("server started"));
