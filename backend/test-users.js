import mongoose from 'mongoose';
import User from './models/User.js';

// Connect to MongoDB Atlas
const MONGO_URI = 'mongodb+srv://rmmkr2018:JPsrofyHOTcm9KnA@apartmentdb.q3gxbq7.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Sample users data
const sampleUsers = [
    {
        name: "John Doe",
        gmail: "john.doe@example.com",
        password: "password123",
        age: 28,
        gender: "Male",
        address: "123 Main Street, New York, NY 10001",
        phoneNumber: "+1-555-0123"
    },
    {
        name: "Jane Smith",
        gmail: "jane.smith@example.com",
        password: "password123",
        age: 32,
        gender: "Female",
        address: "456 Oak Avenue, Los Angeles, CA 90210",
        phoneNumber: "+1-555-0456"
    },
    {
        name: "Mike Johnson",
        gmail: "mike.johnson@example.com",
        password: "password123",
        age: 25,
        gender: "Male",
        address: "789 Pine Road, Chicago, IL 60601",
        phoneNumber: "+1-555-0789"
    },
    {
        name: "Sarah Wilson",
        gmail: "sarah.wilson@example.com",
        password: "password123",
        age: 29,
        gender: "Female",
        address: "321 Elm Street, Houston, TX 77001",
        phoneNumber: "+1-555-0321"
    },
    {
        name: "David Brown",
        gmail: "david.brown@example.com",
        password: "password123",
        age: 35,
        gender: "Male",
        address: "654 Maple Drive, Phoenix, AZ 85001",
        phoneNumber: "+1-555-0654"
    },
    {
        name: "Emily Davis",
        gmail: "emily.davis@example.com",
        password: "password123",
        age: 27,
        gender: "Female",
        address: "987 Cedar Lane, Philadelphia, PA 19101",
        phoneNumber: "+1-555-0987"
    },
    {
        name: "Robert Miller",
        gmail: "robert.miller@example.com",
        password: "password123",
        age: 41,
        gender: "Male",
        address: "147 Birch Court, San Antonio, TX 78201",
        phoneNumber: "+1-555-0147"
    },
    {
        name: "Lisa Garcia",
        gmail: "lisa.garcia@example.com",
        password: "password123",
        age: 31,
        gender: "Female",
        address: "258 Spruce Way, San Diego, CA 92101",
        phoneNumber: "+1-555-0258"
    }
];

// Function to add sample users
const addSampleUsers = async () => {
    try {
        // Clear existing users (optional - comment out if you want to keep existing data)
        await User.deleteMany({});
        console.log("🗑️ Cleared existing users");

        // Add sample users
        const createdUsers = await User.insertMany(sampleUsers);
        console.log(`✅ Successfully added ${createdUsers.length} sample users`);

        // Display created users
        createdUsers.forEach(user => {
            console.log(`- ${user.name} (${user.gmail})`);
        });

    } catch (error) {
        console.error("❌ Error adding sample users:", error);
    } finally {
        // Close the connection
        await mongoose.connection.close();
        console.log("🔌 Database connection closed");
    }
};

// Run the function
addSampleUsers();
