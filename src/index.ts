import app from './app'
import { createServer } from 'http'
import { Server } from 'socket.io'
import dotenv from 'dotenv'
import { socketHandler } from './sockets/socketHandlers'

dotenv.config()

const PORT = process.env.PORT ?? 3000

// Create the HTTP server
const server = createServer(app)

// Initialize Socket.io
const io = new Server(server)

// Use the socket handler
socketHandler(io)

// Listen on the defined port
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
