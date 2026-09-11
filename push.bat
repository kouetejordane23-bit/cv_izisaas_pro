@echo off
echo Lancement de l'envoi vers GitHub...
"C:\Program Files\Git\cmd\git.exe" push -u origin main
echo.
echo Appuyez sur une touche pour fermer cette fenetre.
pause > nul
