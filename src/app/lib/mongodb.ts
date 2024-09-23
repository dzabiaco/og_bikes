import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export async function connectToDatabase() {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);

        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw new Error('Failed to connect to the database');
    }
}