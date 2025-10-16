import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRouter from './route/book.route.js';
import authRouter from './route/auth.route.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

// Useful middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());


//connect to database here (if any)
try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error connecting to MongoDB:", error);
}

app.use('/book', bookRouter);
app.use('/api/auth', authRouter);

app.get('/api/health', (req, res) => {
    res.json({ ok: true, time: new Date().toISOString() });
});

const server = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

