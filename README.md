# Login Form з MongoDB

Сучасний додаток для реєстрації користувачів з красивим дизайном та серверною частиною на Node.js та MongoDB Atlas.

## 🚀 Особливості

- **Сучасний UI/UX дизайн** з градієнтами та анімаціями
- **Валідація форм** на клієнті та сервері
- **Безпечне зберігання паролів** з хешуванням bcrypt
- **MongoDB Atlas інтеграція** для зберігання даних
- **Responsive дизайн** для всіх пристроїв
- **Обробка помилок** з інформативними повідомленнями

## 📁 Структура проекту

```
login-form/
├── src/                    # React клієнт
│   ├── App.js
│   ├── App.css
│   ├── RegisterForm.js
│   └── index.js
├── server/                 # Node.js сервер
│   ├── server.js
│   ├── package.json
│   ├── .env               # Змінні середовища
│   ├── env.example        # Приклад .env файлу
│   ├── models/
│   │   └── User.js
│   └── routes/
│       └── auth.js
├── install.bat            # Скрипт встановлення залежностей
├── start.bat              # Скрипт запуску додатку
└── README.md
```

## 🛠️ Швидкий запуск

### Автоматичний запуск (Windows)

1. **Встановлення залежностей:**
   ```bash
   # Подвійний клік на install.bat
   # або запустіть в терміналі:
   install.bat
   ```

2. **Запуск додатку:**
   ```bash
   # Подвійний клік на start.bat
   # або запустіть в терміналі:
   start.bat
   ```

### Ручний запуск

#### 1. Встановлення залежностей

```bash
# Для сервера
cd server
npm install

# Для клієнта (в новому терміналі)
cd ..
npm install
```

#### 2. Налаштування змінних середовища

Створіть файл `server/.env` з наступним вмістом:

```env
PORT=5000
MONGODB_URI=mongodb+srv://wanessally:PGRbqS3oVdggpsC8@cluster0.pd7uy1u.mongodb.net/login-form?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-super-secret-jwt-key-2024
```

#### 3. Запуск сервера

```bash
cd server
npm run dev
```

#### 4. Запуск клієнта

В новому терміналі:
```bash
npm start
```

## 🌐 Доступні адреси

- **Клієнт:** http://localhost:3000
- **Сервер:** http://localhost:5000
- **API:** http://localhost:5000/api

## 📡 API Endpoints

### POST `/api/register`
Реєстрація нового користувача

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Користувача успішно зареєстровано",
  "user": {
    "id": "user_id",
    "username": "john_doe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET `/api/users`
Отримання списку всіх користувачів (для тестування)

### GET `/api/test`
Тестовий endpoint для перевірки роботи сервера

## 🎨 Дизайн

Додаток має сучасний дизайн з:
- Градієнтним фоном
- Скляним ефектом (glassmorphism)
- Плавними анімаціями
- Responsive дизайном
- Інтерактивними елементами

## 🔒 Безпека

- Паролі хешуються за допомогою bcrypt
- Валідація даних на клієнті та сервері
- Захист від SQL ін'єкцій
- CORS налаштування
- Обробка помилок

## 🧪 Тестування

Для тестування API можна використовувати:

1. **Postman** або **Insomnia**
2. **cURL** команди
3. **Браузер** для GET запитів

Приклад cURL запиту:
```bash
curl -X POST http://localhost:5000/api/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"123456"}'
```

## 🚀 Розгортання

### Heroku
1. Створіть додаток на Heroku
2. Підключіть MongoDB Atlas
3. Налаштуйте змінні середовища
4. Deploy коду

### Vercel (тільки клієнт)
1. Підключіть GitHub репозиторій
2. Налаштуйте build команди
3. Deploy

## 📝 Ліцензія

MIT License

## 🤝 Внесок

1. Fork проект
2. Створіть feature branch
3. Commit зміни
4. Push до branch
5. Створіть Pull Request

## 📞 Підтримка

Якщо у вас є питання або проблеми, створіть issue в репозиторії.
