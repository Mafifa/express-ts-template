import express, { Application } from 'express'
import { json, urlencoded } from 'body-parser'
import { corsMiddleware } from './middlewares/cors'
import router from './routes/routes'

const app: Application = express()

// Apply the CORS middleware
app.use(corsMiddleware)

// Global middlewares
app.use(json())
app.use(urlencoded({ extended: true }))

// Use defined routes
app.use('/api', router)

// Error handling middleware
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  }
)

export default app
