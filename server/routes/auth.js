const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const router = express.Router();

// Middleware для валідації
const validateRegistration = [
  body('username')
    .isLength({ min: 3 })
    .withMessage('Ім\'я користувача має бути не менше 3 символів')
    .trim()
    .escape(),
  body('email')
    .isEmail()
    .withMessage('Будь ласка, введіть правильний email')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Пароль має бути не менше 6 символів')
];

// Реєстрація користувача
router.post('/register', validateRegistration, async (req, res) => {
  try {
    // Перевірка помилок валідації
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Помилки валідації',
        errors: errors.array()
      });
    }

    const { username, email, password } = req.body;

    // Перевірка чи існує користувач з таким email або username
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Користувач з таким email або іменем вже існує'
      });
    }

    // Створення нового користувача
    const user = new User({
      username,
      email,
      password
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: 'Користувача успішно зареєстровано',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      }
    });

  } catch (error) {
    console.error('Помилка реєстрації:', error);
    res.status(500).json({
      success: false,
      message: 'Внутрішня помилка сервера'
    });
  }
});

// Отримання всіх користувачів (для тестування)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password');
    res.json({
      success: true,
      users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Помилка отримання користувачів'
    });
  }
});

module.exports = router; 