import { Request, Response } from 'express';
import { prisma } from '@/models/primsa';
import { prismaErrorHandler } from '@/middlewares/errorHandler';

class TransactionController {
  async getTransactions(req: Request, res: Response) {
    try {
      const { q } = req.query
      const transaction = await prisma.transaction.findMany({
        include: {
          user: true,
          service_type: true
        },
        where: {
          transaction_id: {
            contains: q as string
          }
        }
      })
      res.status(200).json({ data: transaction });
    } catch (err) {
      prismaErrorHandler(err, res);
    }
  }
  async createTransaction(req: Request, res: Response) {
    try {
      const transaction = await prisma.transaction.create({
        data: req.body
      })
      res.status(201).json({
        data: transaction
      })
    } catch (err) {
      prismaErrorHandler(err, res)
    }
  }
}

export default new TransactionController()