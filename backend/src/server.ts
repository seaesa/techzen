import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import { env } from './config/env';
import router from './routes/routes';
import { prisma } from 'models/primsa';
const app = express();

(async () => {
  app.use(express.json());
  app.use(cors())

  app.use(router)

  app.listen(env.PORT, () => {
    console.log(`Server is running on http://localhost:${env.PORT}`);
  });
})()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
export default app;