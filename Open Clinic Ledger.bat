@echo off
title Clinic Ledger
set "APP_FOLDER=%~dp0"
cd /d "%APP_FOLDER%"

where node >nul 2>nul
if %errorlevel%==0 (
  node serve.js
  goto :end
)

set "CODEX_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%CODEX_NODE%" (
  "%CODEX_NODE%" serve.js
  goto :end
)

echo.
echo I could not find the small helper needed to open Clinic Ledger.
echo Please open this folder in Codex and ask: "Help me start Clinic Ledger".
pause

:end
