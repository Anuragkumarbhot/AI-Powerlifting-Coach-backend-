const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🏋️ AI Powerlifting Backend Running");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

let currentLift = {
  athlete: "John Doe",
  lift: "Squat",
  weight: 220,
  attempt: 1
};

io.on("connection", (socket) => {

  console.log("Judge/Client connected");

  socket.emit("updateScoreboard", currentLift);

  socket.on("updateLift", (data) => {
    currentLift = data;

    io.emit("updateScoreboard", currentLift);
  });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
