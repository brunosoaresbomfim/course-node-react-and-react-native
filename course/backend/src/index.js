const express = require("express");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

const TaskRoutes = require("./routes/TaskRoutes");

server.use("/task", TaskRoutes);

server.get("/teste", (req, res) => {
  res.send("TUDO CERTO COM A NOSSA API");
});

server.listen(3333, () => {
  console.log("API ONLINE!");
});
