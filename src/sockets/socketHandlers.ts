import { Server } from 'socket.io'

export const socketHandler = (io: Server): void => {
  // Listen for connection events
  io.on('connection', (socket) => {
    console.log('A user connected')

    // Handle custom events
    socket.on('message', (msg) => {
      console.log(`Message received: ${msg}`)
      io.emit('message', msg) // Broadcast the message to all clients
    })

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('A user disconnected')
    })
  })
}
