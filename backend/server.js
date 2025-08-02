const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Route imports
const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();
const app = express();

// ✅ CORS Configuration
app.use(cors({
  origin: function (origin, callback) {
    console.log("🌐 Origin request received:", origin);

    const allowed = [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://print-peak-app.vercel.app',
      'https://print-peak-app.vercel.app/', // also include trailing slash version
    ];

    if (!origin || allowed.some(allowedOrigin => origin.startsWith(allowedOrigin))) {
      callback(null, true);
    } else {
      console.error('❌ CORS Not Allowed from:', origin);
      callback(new Error('CORS Not Allowed'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


// Middlewares
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
