const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const http = require('http');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO= esta es la comunicacion del backend
let io = socketio(server);

io.on('connection', (client) => {
    console.log('Nuevo usuario conectado')
});

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});
