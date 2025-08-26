import mongoose from 'mongoose';
import Payment from './models/Payment.js';

// Connect to MongoDB Atlas
const MONGO_URI = 'mongodb+srv://rmmkr2018:JPsrofyHOTcm9KnA@apartmentdb.q3gxbq7.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Sample payment data
const samplePayments = [
    {
        orderNumber: "ORD001",
        customerName: "John Smith",
        customerEmail: "john.smith@email.com",
        customerPhone: "+1-555-0123",
        product: "Deluxe Suite",
        amount: 299.99,
        currency: "USD",
        paymentMethod: "Credit Card",
        cardType: "Visa",
        last4Digits: "1234",
        status: "completed",
        stripePaymentId: "pi_1234567890",
        checkInDate: new Date("2024-01-15"),
        checkOutDate: new Date("2024-01-17"),
        numberOfGuests: 2,
        roomType: "Deluxe Suite",
        specialRequests: "Late check-in preferred",
        notes: "Customer requested early check-in"
    },
    {
        orderNumber: "ORD002",
        customerName: "Sarah Johnson",
        customerEmail: "sarah.j@email.com",
        customerPhone: "+1-555-0456",
        product: "Standard Room",
        amount: 149.99,
        currency: "USD",
        paymentMethod: "Credit Card",
        cardType: "Mastercard",
        last4Digits: "5678",
        status: "pending",
        stripePaymentId: "pi_0987654321",
        checkInDate: new Date("2024-01-20"),
        checkOutDate: new Date("2024-01-22"),
        numberOfGuests: 1,
        roomType: "Standard Room",
        specialRequests: "High floor preferred",
        notes: "First-time guest"
    },
    {
        orderNumber: "ORD003",
        customerName: "Michael Brown",
        customerEmail: "mike.brown@email.com",
        customerPhone: "+1-555-0789",
        product: "Executive Suite",
        amount: 449.99,
        currency: "USD",
        paymentMethod: "Credit Card",
        cardType: "American Express",
        last4Digits: "9012",
        status: "completed",
        stripePaymentId: "pi_1122334455",
        checkInDate: new Date("2024-01-25"),
        checkOutDate: new Date("2024-01-28"),
        numberOfGuests: 3,
        roomType: "Executive Suite",
        specialRequests: "Extra towels and pillows",
        notes: "Business traveler"
    },
    {
        orderNumber: "ORD004",
        customerName: "Emily Davis",
        customerEmail: "emily.davis@email.com",
        customerPhone: "+1-555-0321",
        product: "Family Room",
        amount: 199.99,
        currency: "USD",
        paymentMethod: "Credit Card",
        cardType: "Discover",
        last4Digits: "3456",
        status: "failed",
        stripePaymentId: "pi_5566778899",
        checkInDate: new Date("2024-02-01"),
        checkOutDate: new Date("2024-02-03"),
        numberOfGuests: 4,
        roomType: "Family Room",
        specialRequests: "Connecting rooms if available",
        notes: "Payment declined - insufficient funds"
    },
    {
        orderNumber: "ORD005",
        customerName: "David Wilson",
        customerEmail: "david.wilson@email.com",
        customerPhone: "+1-555-0654",
        product: "Presidential Suite",
        amount: 799.99,
        currency: "USD",
        paymentMethod: "Credit Card",
        cardType: "Visa",
        last4Digits: "7890",
        status: "completed",
        stripePaymentId: "pi_9988776655",
        checkInDate: new Date("2024-02-05"),
        checkOutDate: new Date("2024-02-07"),
        numberOfGuests: 2,
        roomType: "Presidential Suite",
        specialRequests: "Champagne on arrival",
        notes: "VIP guest - anniversary celebration"
    },
    {
        orderNumber: "ORD006",
        customerName: "Lisa Anderson",
        customerEmail: "lisa.anderson@email.com",
        customerPhone: "+1-555-0987",
        product: "Standard Room",
        amount: 129.99,
        currency: "USD",
        paymentMethod: "Credit Card",
        cardType: "Mastercard",
        last4Digits: "2345",
        status: "refunded",
        stripePaymentId: "pi_4433221100",
        checkInDate: new Date("2024-02-10"),
        checkOutDate: new Date("2024-02-12"),
        numberOfGuests: 1,
        roomType: "Standard Room",
        specialRequests: "Quiet room",
        notes: "Refunded due to cancellation"
    }
];

// Function to seed the database
const seedPayments = async () => {
    try {
        // Clear existing payments
        await Payment.deleteMany({});
        console.log("🗑️ Cleared existing payments");

        // Insert sample payments
        const insertedPayments = await Payment.insertMany(samplePayments);
        console.log(`✅ Successfully inserted ${insertedPayments.length} payment records`);

        // Display the inserted payments
        console.log("\n📋 Inserted Payment Records:");
        insertedPayments.forEach(payment => {
            console.log(`- ${payment.orderNumber}: ${payment.customerName} - $${payment.amount} (${payment.status})`);
        });

    } catch (error) {
        console.error("❌ Error seeding payments:", error);
    } finally {
        // Close the database connection
        await mongoose.connection.close();
        console.log("🔌 Database connection closed");
    }
};

// Run the seeding function
seedPayments();


