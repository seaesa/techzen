import { Request, Response } from 'express';
import { prisma } from '@/models/primsa';
import { prismaErrorHandler } from '@/middlewares/errorHandler';

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const user = await prisma.user.findMany({})
      res.status(200).json({ data: user });
    } catch (err) {
      prismaErrorHandler(err, res);
    }
  }
  async createUser(req: Request, res: Response) {
    try {
      const { name, email, phone } = req.body
      const user = await prisma.user.create({
        data: {
          name,
          email,
          phone: Number(phone)
        }
      })
      console.log(user)
      res.status(201).json({ data: user })
    } catch (err) {
      prismaErrorHandler(err, res)
    }
  }
}

export default new UserController()