import cors from 'cors'

// Configure the CORS options
const corsOptions = {
  origin: ['http://localhost:4000', 'https://your-domain.com'], // Specify allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
}

// Middleware function to use in app.ts
export const corsMiddleware = cors(corsOptions)
