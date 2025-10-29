@echo off
echo ================================================
echo ImportationDotCA - Localhost Server
echo ================================================
echo.
echo Starting development server...
echo This will keep running until you press Ctrl+C
echo.
echo Server will be available at:
echo   http://localhost:3000
echo.
echo ================================================
echo.

cd /d "%~dp0"
npm run dev

echo.
echo.
echo Server stopped. Press any key to exit...
pause >nul

