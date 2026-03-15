const express = require("express")
const http = require("http")
const cors = require("cors")
const { Server } = require("socket.io")

const app = express()

app.use(cors())
app.use(express.json())

const server = http.createServer(app)

const io = new Server(server,{
  cors:{ origin:"*" }
})

let meetState = {
  athlete:"",
  lift:"Squat",
  weight:0
}

let queue = []

io.on("connection",(socket)=>{

  console.log("client connected")

  socket.emit("meetUpdate",meetState)
  socket.emit("queueUpdate",queue)

  socket.on("updateLift",(data)=>{
    meetState = data
    io.emit("meetUpdate",meetState)
  })

  socket.on("addQueue",(athlete)=>{
    queue.push(athlete)
    io.emit("queueUpdate",queue)
  })

})

app.get("/",(req,res)=>{
  res.send("Powerlifting Meet Backend Running")
})

const PORT = process.env.PORT || 5000

server.listen(PORT,()=>{
  console.log("Server running on port",PORT)
})
