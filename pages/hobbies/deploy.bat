@echo off
:: update mkdown notes, build statnotes, commit
cmd /c "cd /d D:\Github PC\Not-A-Cat && git pull"
cmd /c "cd /d D:\Github PC\Not-A-Cat && mkdocs build && git add . && git commit -m "Autocommit via deploy.bat" && git push"
:: copy files
set "source=D:\Github PC\Not-A-Cat"
set "destination=D:\Github PC\ouibaa.github.io\pages\hobbies"
xcopy "%source%" "%destination%" /Y /E /C /I /Q /G /H /R /K /Z /J

cmd /c "cd /d D:\Github PC\ouibaa.github.io && git add . && git commit -m "autocommit via deploy.bat from not-a-cat" && git push"