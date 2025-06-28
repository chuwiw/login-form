const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Підключення до MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/login-form')
  .then(() => {
    console.log('✅ Підключено до MongoDB Atlas');
    console.log('📊 База даних: login-form');
  })
  .catch((error) => {
    console.error('❌ Помилка підключення до MongoDB:', error);
  });

// Маршрути
app.use('/api', authRoutes);

// Тестовий маршрут
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Сервер працює!',
    timestamp: new Date().toISOString(),
    database: 'MongoDB Atlas'
  });
});

// Обробка помилок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Щось пішло не так!'
  });
});

// 404 обробка
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Маршрут не знайдено'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущено на порту ${PORT}`);
  console.log(`📡 API доступне за адресою: http://localhost:${PORT}/api`);
  console.log(`🌐 MongoDB Atlas підключено`);
}); 