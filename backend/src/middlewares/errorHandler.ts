import { Prisma } from "@prisma/client";
import { Response } from "express";

export const prismaErrorHandler = (err: unknown, res: Response) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case 'P2001':
        res.status(404).json({
          error: "Record not found for given query.",
        });
      case 'P2002':
        res.status(400).json({
          error: "Unique constraint violation",
        });
      case 'P2003':
        res.status(400).json({
          error: "Foreign key constraint violation.",
        });
      case 'P2025':
        res.status(404).json({
          error: "Record not found",
        });
      default:
        res.status(500).json({ error: "Internal server error", message: err.message });
    }
  }
}; 
