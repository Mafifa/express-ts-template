import { User } from '../types'

declare global {
  namespace Express {
    // Interface to extend Express request
    interface Request {
      user?: User // Or adjust the type based on what you save in req.user
    }
  }
}
