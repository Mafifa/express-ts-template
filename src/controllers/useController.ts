import { Request, Response } from 'express'
import { getUsersFromJSON, saveUsersToJSON } from '../models/userModels'
import { validateUserData } from '../lib/validateUser'

// Get all users
export const getUsers = (req: Request, res: Response): void => {
  const users = getUsersFromJSON()
  res.json(users)
}

// Get user by ID
export const getUserById = (req: Request, res: Response): void => {
  const users = getUsersFromJSON()
  const user = users.find((u) => u.id === parseInt(req.params.id))

  if (!user) {
    res.status(404).send('User not found')
  } else {
    res.json(user)
  }
}

// Create a new user
export const createUser = (req: Request, res: Response): void => {
  const users = getUsersFromJSON()

  // Validate and filter the incoming data
  const { isValid, errors, user } = validateUserData(req.body)

  // If the validation fails, return a 400 error with the validation messages
  if (!isValid) {
    res.status(400).json({ errors })
    return
  }

  // Create a new user with an incremented ID
  const newUser = {
    id: users.length + 1,
    ...user,
  }

  // Add the new user to the users array and save it to the JSON file
  users.push(newUser)
  saveUsersToJSON(users)

  // Respond with the newly created user
  res.status(201).json(newUser)
}

// Update a user
export const updateUser = (req: Request, res: Response): void => {
  const users = getUsersFromJSON()
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id))

  if (userIndex === -1) {
    res.status(404).send('User not found')
  } else {
    const updatedUser = { ...users[userIndex], ...req.body }
    users[userIndex] = updatedUser
    saveUsersToJSON(users)
    res.json(updatedUser)
  }
}

// Delete a user
export const deleteUser = (req: Request, res: Response): void => {
  const users = getUsersFromJSON()
  const newUsers = users.filter((u) => u.id !== parseInt(req.params.id))

  if (newUsers.length === users.length) {
    res.status(404).send('User not found')
  } else {
    saveUsersToJSON(newUsers)
    res.status(204).send()
  }
}
