const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../configs/db');
const productRoutes = require('../routes/productRoutes');

dotenv.config();
connectDB();

const app = express();

// 1. CORS Configuration (Sahi hai)
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. IMPORTANT: JSON limit ko barhayein (413 error fix karne ke liye)
// Default 1mb hoti hai, isay 10mb ya 50mb kar dein
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.send('Restaurant API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));