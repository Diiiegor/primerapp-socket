const {io} = require('../server');
io.on('connection', (client) => {
    console.log('Nuevo usuario conectado');

    client.on('disconnect', () => {
        console.log('usuario desconectado')
    });

    client.on('enviarMensaje', (mensaje, callback) => {
        //console.log(mensaje);

        if (mensaje.usuario) {
            callback({
                respuesta: 'Todo ok'
            })
        } else {
            callback({
                respuesta: 'Todo salio mal...'
            })
        }
    });

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'bienvenido a esta aplicacion'
    });

});
