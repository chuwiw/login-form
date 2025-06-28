@echo off
echo ========================================
echo    Login Form з MongoDB - Запуск
echo ========================================
echo.

echo Запуск сервера...
cd server
start "Server" cmd /k "npm run dev"

echo.
echo Очікування запуску сервера...
timeout /t 3 /nobreak > nul

echo.
echo Запуск клієнтської частини...
cd ..
start "Client" cmd /k "npm start"

echo.
echo ========================================
echo    Обидві частини запущені!
echo ========================================
echo.
echo Сервер: http://localhost:5000
echo Клієнт: http://localhost:3000
echo.
echo Натисніть будь-яку клавішу для виходу...
pause > nul 