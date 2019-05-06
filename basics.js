const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('Connected!');
});

const io = socketio(server);

io.on('connection', (socket, req) => {
    socket.emit('welcome', 'Welcome to the SocketIO');
    socket.on('message', (message) => {
        
            console.log(message);
        
    });
});
server.listen(8080);
