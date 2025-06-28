# Налаштування проекту Login Form

## 🔧 Кроки налаштування

### 1. Створення файлу .env

Створіть файл `server/.env` з наступним вмістом:

```env
PORT=5000
MONGODB_URI=mongodb+srv://wanessally:PGRbqS3oVdggpsC8@cluster0.pd7uy1u.mongodb.net/login-form?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-super-secret-jwt-key-2024
```

### 2. Встановлення залежностей

#### Варіант A: Автоматичний (Windows)
```bash
# Подвійний клік на install.bat
```

#### Варіант B: Ручний
```bash
# Для сервера
cd server
npm install

# Для клієнта
cd ..
npm install
```

### 3. Запуск додатку

#### Варіант A: Автоматичний (Windows)
```bash
# Подвійний клік на start.bat
```

#### Варіант B: Ручний
```bash
# Термінал 1 - Сервер
cd server
npm run dev

# Термінал 2 - Клієнт
cd ..
npm start
```

## 🌐 Доступні адреси

- **Клієнт:** http://localhost:3000
- **Сервер:** http://localhost:5000
- **API:** http://localhost:5000/api

## 🧪 Тестування

### Тест сервера
```bash
curl http://localhost:5000/api/test
```

### Тест реєстрації
```bash
curl -X POST http://localhost:5000/api/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"123456"}'
```

## 🔍 Перевірка роботи

1. Відкрийте http://localhost:3000
2. Заповніть форму реєстрації
3. Перевірте, що дані зберігаються в MongoDB Atlas

## 🚨 Вирішення проблем

### Проблема з npm в PowerShell
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Проблема з підключенням до MongoDB
- Перевірте правильність connection string
- Переконайтеся, що IP адреса додана до whitelist в MongoDB Atlas

### Проблема з портами
- Перевірте, що порти 3000 та 5000 не зайняті
- Змініть порти в .env файлі при необхідності 