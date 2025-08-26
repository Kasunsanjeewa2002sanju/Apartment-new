import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// JWT Secret (in production, this should be in environment variables)
const JWT_SECRET = 'your-secret-key-change-in-production';

// CREATE user
export const createUser = async (req, res) => {
    try {
        const { name, gmail, password, age, gender, address, phoneNumber } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ gmail });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        // Create new user
        const newUser = new User({
            name,
            gmail,
            password, // In a real app, you should hash this password
            age,
            gender,
            address,
            phoneNumber
        });

        await newUser.save();
        res.status(201).json({ 
            message: 'User created successfully',
            user: {
                id: newUser._id,
                name: newUser.name,
                gmail: newUser.gmail,
                age: newUser.age,
                gender: newUser.gender,
                address: newUser.address,
                phoneNumber: newUser.phoneNumber
            }
        });
    } catch (err) {
        console.error('Error creating user:', err);
        if (err.name === 'ValidationError') {
            const errors = Object.values(err.errors).map(error => error.message);
            return res.status(400).json({ error: errors.join(', ') });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

// GET all users
export const getUsers = async (req, res) => {
   
   let users;

    try {
        users = await User.find();
       
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

    if(!users){
        return res.status(404).json({message: 'No users found'});
    }

    res.status(200).json({users});
};

// GET user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// UPDATE user by ID
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedUser) return res.status(404).json({ error: 'User not found' });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE user by ID
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// LOGIN user
export const loginUser = async (req, res) => {
    try {
        const { gmail, password } = req.body;

        // Find user by email
        const user = await User.findOne({ gmail });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Check password (in a real app, you should hash passwords during registration)
        // For now, we'll do a simple comparison since passwords aren't hashed yet
        const isPasswordValid = password === user.password; // Replace with bcrypt.compare in production
        
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: user._id,
                email: user.gmail,
                name: user.name
            },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Return user data and token
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                gmail: user.gmail,
                age: user.age,
                gender: user.gender,
                address: user.address,
                phoneNumber: user.phoneNumber
            }
        });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};


