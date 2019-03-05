let socket = io();

socket.on('connect', () => {
    console.log('conectado en el server');
});

//los on son para escuchar
socket.on('disconnect', () => {
    console.log('conexion perdida con el server')
});

//los emmit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'diego',
    mensaje: 'hola mundo'
}, function (data) {
    console.log(data.respuesta)
});

//escucho informacion del server
socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje)
})
