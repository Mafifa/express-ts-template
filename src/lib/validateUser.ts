import { UserData } from '../types/types'

// Function to validate and filter the user data
export const validateUserData = (
  data: any
): { isValid: boolean; errors?: string[]; user?: UserData } => {
  const { name, email, age } = data

  const errors: string[] = []

  // Validate the name field
  if (typeof name !== 'string' || name.trim().length === 0) {
    errors.push('Invalid or missing "name".')
  }

  // Validate the email field
  if (typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.push('Invalid or missing "email".')
  }

  // Validate the age field
  if (typeof age !== 'number' || age <= 0) {
    errors.push('Invalid or missing "age".')
  }

  // If there are any validation errors, return them
  if (errors.length > 0) {
    return { isValid: false, errors }
  }

  // If the data is valid, return the filtered user data
  return { isValid: true, user: { name, email, age } }
}
