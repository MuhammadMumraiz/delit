import { io } from "socket.io-client";
const socket = io ('http://localhost:5500/')

const box= document.getElementById("container");
console.log(box)

socket.on("hello", (arg1, arg2, arg3) => {
    console.log(arg1); // 1
    console.log(arg2); // "2"
    console.log(arg3); // { 3: '4', 5: ArrayBuffer (1) [ 6 ] }
  });
box.append("ed")