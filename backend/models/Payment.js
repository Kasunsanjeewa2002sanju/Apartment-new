import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    orderNumber: { 
        type: String, 
        required: true, 
        unique: true 
    },
    customerName: { 
        type: String, 
        required: true 
    },
    customerEmail: { 
        type: String, 
        required: true 
    },
    customerPhone: { 
        type: String, 
        required: true 
    },
    product: { 
        type: String, 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    currency: { 
        type: String, 
        default: 'USD' 
    },
    paymentMethod: { 
        type: String, 
        required: true 
    },
    cardType: { 
        type: String 
    },
    last4Digits: { 
        type: String 
    },
    status: { 
        type: String, 
        enum: ['pending', 'completed', 'failed', 'refunded'], 
        default: 'pending' 
    },
    stripePaymentId: { 
        type: String 
    },
    checkInDate: { 
        type: Date 
    },
    checkOutDate: { 
        type: Date 
    },
    numberOfGuests: { 
        type: Number, 
        default: 1 
    },
    roomType: { 
        type: String 
    },
    specialRequests: { 
        type: String 
    },
    notes: { 
        type: String 
    }
}, { timestamps: true });

export default mongoose.model('Payment', paymentSchema);

