import express from "express";
import bodyParser from "body-parser";
import items from "./items";

const path = require("path");
const server = express();
const port = process.env.PORT || 8050;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json({ extended: true }));
server.use(express.static(path.join(__dirname, "client", "build")));

server.use("/items", items);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

server.listen(port || 8050, () => console.log("server started"));

// server.listen(...)

// ... other imports
// const path = require("path")

// ... other app.use middleware
// server.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

// app.listen(...)

// // ... other imports
// const path = require("path")

// // ... other app.use middleware
// app.use(express.static(path.join(__dirname, "client", "build")))
// server.use(express.static(path.join(__dirname, "client", "build")))

// // ...
// // Right before your app.listen(), add this:
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

// app.listen(...)
