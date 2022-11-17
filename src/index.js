// const cors =require("cors")
// const app = require('./server');
// const express = require("express");
// const server= require('http').createServer(express)


// const port=process.env.PORT || 5000

// const io = require("socket.io")(server);



// server.listen(PORT, ()=>{
//   console.log("Application running successfully on port: "+PORT);
// });

// io.on("connection", (socket) => {
//     socket.emit("HelloWorld")
//     socket.on("send",message=>{
//         socket.broadcast.emit("msgRec",message)
//     })
//   });









// app.listen(3000,()=>{
//     console.log("Server Started at http://localhost:3000");
// })


// app.post("/admin",async(req,res)=>{
//     console.log(req.body)
//     // res.send("hello")
//     // res.send(req.body)
//     res.json({msg:"HSSSSi"})
// })

// io.on("connection", (socket) => {
//     socket.emit("hello", 1, "2", { 3: '4', 5: Buffer.from([6]) });
//   });


var cors = require('cors')
// Setup basic express server
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);

// const port = process.env.PORT || 5000;
const port =  5000;


const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

server.listen(port, () => {
  console.log('Server listening at port %d', port);
  
});

io.on("connection", (socket) => {
  socket.emit("hello", 1, "2", { 3: '4', 5: Buffer.from([6]) });

  socket.on("ChatMsg",(message)=>{
    console.log(message)
    socket.emit("reciMsg",message )
  })


});



    