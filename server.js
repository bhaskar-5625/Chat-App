const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const app = express();
const server = app.listen(3000,()=>{
    console.log("Server Started");
});
const io = socketIO(server);
app.use(express.static(path.join(__dirname)));
io.on('connection',(socket)=>{
    console.log("A user has connected to server");
    socket.on('chat message',msg=>{ 
        io.emit('chat message',msg);                   
    })
})


// const express = require('express');
// const socketIO = require('socket.io');
// const http = require('http');
// const path = require('path');
// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);
// app.use(express.static(path.join(__dirname)));
// server.listen(3000, () => {
//     console.log("Server Started");
// });
// io.on('connection', (socket) => {
//     console.log("A user has connected to server");
// });

