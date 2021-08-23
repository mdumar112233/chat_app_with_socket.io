const express = require('express');
const app = express();
const http = require('http');
// const path = require('path')
const expressServer = http.createServer(app);

// app.use(express.static('client/build'))

const io = require('socket.io')(expressServer, {
    cors: {
      origin: "*",
    }
  });
// const io = new Server(expressServer);


// USER SOCKET CONNECTION AND DISCONNECT
io.on('connection', (socket) => {
    console.log('user connected')

    socket.on('message', payload => {
        console.log(payload);
        io.emit('message', payload)
    })

    socket.on('disconnet', () => {
        console.log('user disconnect');
    })
})

app.get('/', (req, res) => {
    console.log('connected');
    res.send('socket chat app')
})

expressServer.listen(8000)