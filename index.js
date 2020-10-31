const express = require("express");
const socket = require("socket.io");

const PORT = 5000;
const app = express();
const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", (socket) => {
    console.log("Connection established");
});