import { Request, Response } from 'express';
import { prisma } from '@/models/primsa';
import { prismaErrorHandler } from '@/middlewares/errorHandler';

class ServiceController {
  async getServices(req: Request, res: Response) {
    try {
      const service = await prisma.service.findMany({})
      res.status(200).json({ data: service });
    } catch (err) {
      prismaErrorHandler(err, res);
    }
  }
  async createService(req: Request, res: Response) {
    try {
      const { name } = req.body
      const service = await prisma.service.create({
        data: {
          name
        }
      })
      res.status(201).json({ data: service })
    } catch (err) {
      prismaErrorHandler(err, res)
    }
  }
}

export default new ServiceController()