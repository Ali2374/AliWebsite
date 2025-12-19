# Open sampatt-template/index.html from PowerShell
$scriptDir = Split-Path -Parent $PSCommandPath
Set-Location $scriptDir
$index = Join-Path $PWD 'index.html'
Start-Process $index
