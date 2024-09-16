import app from './app'
import { createServer } from 'http'
import { Server } from 'socket.io'
import dotenv from 'dotenv'
import { socketHandler } from './sockets/socketHandlers'

dotenv.config()

const PORT = process.env.PORT ?? 0

// Crear el servidor HTTP
const server = createServer(app)

// Inicializar Socket.io
const io = new Server(server)

// Utilizar el manejador de sockets
socketHandler(io)

// Escuchar el puerto
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
