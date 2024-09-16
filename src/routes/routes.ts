import { Router } from 'express'
import { controllerRoute } from '../controllers/Controller'

const router = Router()

// example
router.get('/api', controllerRoute)

export default router
