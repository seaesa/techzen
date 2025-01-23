import dotenv from "dotenv";
import { prisma } from '@/models/primsa';
import { main } from '@/server'

dotenv.config();
const app = main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });

export default app;
