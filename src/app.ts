import express, { Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routes/routes'

const app: Application = express()

// Middlewares
app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/', router)
export default app
