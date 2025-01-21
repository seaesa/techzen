import postController from '@/controllers/post-controller';
import express from 'express';

const router = express.Router();

router.get('/post', postController.post)

export default router;