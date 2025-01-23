import express from "express";
import cors from 'cors';

import { env } from '@/config/env';
import router from '@/routes/routes';


export async function main() {
  const app = express();
  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(router)

  app.listen(env.PORT, () => {
    console.log(`Server is running on http://localhost:${env.PORT}`);
  });
  return app;
}  