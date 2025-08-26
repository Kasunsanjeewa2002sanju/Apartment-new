import express from 'express';
import { 
    getAllPayments, 
    getPaymentById, 
    createPayment, 
    updatePayment, 
    deletePayment,
    getPaymentStats 
} from '../controllers/paymentController.js';

const router = express.Router();

// Get all payments
router.get('/', getAllPayments);

// Get payment statistics
router.get('/stats', getPaymentStats);

// Get payment by ID
router.get('/:id', getPaymentById);

// Create new payment
router.post('/', createPayment);

// Update payment
router.put('/:id', updatePayment);

// Delete payment
router.delete('/:id', deletePayment);

export default router;

