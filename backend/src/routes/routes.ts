import serviceController from '@/controllers/service-controller';
import transactionController from '@/controllers/transaction-controller';
import userController from '@/controllers/user-controller';
import express from 'express';

const router = express.Router();

// Transactions
router.get('/transactions', transactionController.getTransactions);
router.post('/transaction', transactionController.createTransaction);

// Client
router.get('/services', serviceController.getServices);
router.post('/service', serviceController.createService);

// Client
router.get('/users', userController.getUsers);
router.post('/user', userController.createUser);

export default router;