import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
const MONGO_URI = 'mongodb+srv://rmmkr2018:JPsrofyHOTcm9KnA@apartmentdb.q3gxbq7.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);

// Simple route
app.get('/', (req, res) => {
    res.send('Hello from backend!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
