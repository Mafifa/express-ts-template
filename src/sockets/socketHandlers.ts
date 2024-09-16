import { Server, Socket } from 'socket.io'

// Función para manejar la lógica de conexión de sockets
export function socketHandler(io: Server) {
  io.on('connection', (socket: Socket) => {
    console.log('Nuevo cliente conectado')

    // Lógica adicional del socket aquí
    socket.on('disconnect', () => {
      console.log('Cliente desconectado')
    })

    // Puedes agregar otros eventos que maneje el socket
    socket.on('mensaje', (data) => {
      console.log('Mensaje recibido:', data)
      socket.emit('respuesta', 'Mensaje recibido')
    })
  })
}
