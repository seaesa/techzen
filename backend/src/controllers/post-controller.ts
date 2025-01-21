import { Request, Response } from 'express';
import { prisma } from 'lib/primsa';

class PostController {
  async post(req: Request, res: Response) {
    const user = await prisma.user.findMany({})
    console.log(user)
    res.json({
      msg: 'ahih'
    })
  }
}

export default new PostController()