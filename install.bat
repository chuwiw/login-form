@echo off
echo ========================================
echo    Встановлення залежностей
echo ========================================
echo.

echo Встановлення залежностей для сервера...
cd server
call npm install
if %errorlevel% neq 0 (
    echo ❌ Помилка встановлення залежностей сервера
    pause
    exit /b 1
)

echo.
echo Встановлення залежностей для клієнта...
cd ..
call npm install
if %errorlevel% neq 0 (
    echo ❌ Помилка встановлення залежностей клієнта
    pause
    exit /b 1
)

echo.
echo ========================================
echo    ✅ Всі залежності встановлено!
echo ========================================
echo.
echo Тепер можете запустити start.bat
echo.
pause 