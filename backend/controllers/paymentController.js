import Payment from '../models/Payment.js';

// Get all payments
export const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find().sort({ createdAt: -1 });
        res.status(200).json({ 
            success: true, 
            count: payments.length,
            payments 
        });
    } catch (error) {
        console.error('Error fetching payments:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch payments',
            error: error.message 
        });
    }
};

// Get payment by ID
export const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ 
                success: false, 
                message: 'Payment not found' 
            });
        }
        res.status(200).json({ 
            success: true, 
            payment 
        });
    } catch (error) {
        console.error('Error fetching payment:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch payment',
            error: error.message 
        });
    }
};

// Create new payment
export const createPayment = async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).json({ 
            success: true, 
            message: 'Payment created successfully',
            payment 
        });
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(400).json({ 
            success: false, 
            message: 'Failed to create payment',
            error: error.message 
        });
    }
};

// Update payment
export const updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );
        
        if (!payment) {
            return res.status(404).json({ 
                success: false, 
                message: 'Payment not found' 
            });
        }
        
        res.status(200).json({ 
            success: true, 
            message: 'Payment updated successfully',
            payment 
        });
    } catch (error) {
        console.error('Error updating payment:', error);
        res.status(400).json({ 
            success: false, 
            message: 'Failed to update payment',
            error: error.message 
        });
    }
};

// Delete payment
export const deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.id);
        
        if (!payment) {
            return res.status(404).json({ 
                success: false, 
                message: 'Payment not found' 
            });
        }
        
        res.status(200).json({ 
            success: true, 
            message: 'Payment deleted successfully' 
        });
    } catch (error) {
        console.error('Error deleting payment:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to delete payment',
            error: error.message 
        });
    }
};

// Get payment statistics
export const getPaymentStats = async (req, res) => {
    try {
        const totalPayments = await Payment.countDocuments();
        const completedPayments = await Payment.countDocuments({ status: 'completed' });
        const pendingPayments = await Payment.countDocuments({ status: 'pending' });
        const failedPayments = await Payment.countDocuments({ status: 'failed' });
        
        const totalAmount = await Payment.aggregate([
            { $match: { status: 'completed' } },
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);
        
        const averageAmount = await Payment.aggregate([
            { $match: { status: 'completed' } },
            { $group: { _id: null, average: { $avg: '$amount' } } }
        ]);
        
        res.status(200).json({
            success: true,
            stats: {
                totalPayments,
                completedPayments,
                pendingPayments,
                failedPayments,
                totalAmount: totalAmount[0]?.total || 0,
                averageAmount: averageAmount[0]?.average || 0
            }
        });
    } catch (error) {
        console.error('Error fetching payment stats:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch payment statistics',
            error: error.message 
        });
    }
};

