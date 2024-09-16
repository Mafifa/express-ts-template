import { Request, Response, NextFunction } from 'express'

// Simple auth middleware example
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    res.status(403).send('Forbidden. No authorization header found.')
  } else {
    // If the authorization header is valid, proceed to the next middleware
    next()
  }
}
