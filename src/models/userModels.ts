import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// Path to the mock JSON file
const dataFilePath = join(__dirname, '../mock/example.json')

// Read users from the JSON file
export const getUsersFromJSON = (): any[] => {
  const data = readFileSync(dataFilePath, 'utf8')
  return JSON.parse(data)
}

// Save updated users to the JSON file
export const saveUsersToJSON = (users: any[]): void => {
  writeFileSync(dataFilePath, JSON.stringify(users, null, 2), 'utf8')
}
