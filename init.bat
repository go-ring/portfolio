@echo off
chcp 65001
call npx -y create-vite@latest . --template react-ts
if %errorlevel% neq 0 exit /b %errorlevel%
exit /b 0
