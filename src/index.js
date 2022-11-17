const cors =require("cors")
const app = require('./server');
const server= require('http').createServer(app)
const express = require("express");
const io = require("socket.io")(5000);






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

io.on("connection", (socket) => {
    socket.emit("hello", 1, "2", { 3: '4', 5: Buffer.from([6]) });
  });