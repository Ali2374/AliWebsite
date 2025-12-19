@echo off
REM Open sampatt-template\index.html from Git Bash or Explorer
pushd %~dp0
REM Use start to open the default browser on index.html
start "" "%cd%\index.html"
popd
exit /b 0
