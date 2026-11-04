@echo off
echo Restarting Print Spooler...
net stop spooler
timeout /t 3 /nobreak > NUL
net start spooler
echo Print Spooler restarted successfully.
pause
