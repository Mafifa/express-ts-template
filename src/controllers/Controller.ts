import { Request, Response } from 'express'

export const controllerRoute = async (
  _req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  return res.send('pong')
}

const obj = { name: 'John', age: 30, job: 'Developer', city: 'New York' }
