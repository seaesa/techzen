import { Request, Response } from 'express';
import { prisma } from 'models/primsa';

class PostController {
  async post(req: Request, res: Response) {
    const user = await prisma.user.findMany({})
    console.log(user)
    res.json({ user })
  }
}

export default new PostController()