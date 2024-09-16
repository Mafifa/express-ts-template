import { Router } from 'express'
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/useController'

const router = Router()

// Define routes for CRUD operations
router.get('/users', getUsers) // Get all users
router.get('/users/:id', getUserById) // Get user by ID
router.post('/users', createUser) // Create a new user
router.put('/users/:id', updateUser) // Update a user by ID
router.delete('/users/:id', deleteUser) // Delete a user by ID

export default router
