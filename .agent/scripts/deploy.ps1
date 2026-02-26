# deploy.ps1
# Script para disparar o webhook de deploy no Easypanel

param(
    [string]$WebhookUrl = "http://72.61.42.171:3000/api/deploy/74751b6d29e84ed1fdc567567ef48e41fa087aa042277f86"
)

Write-Host "Iniciando disparo do webhook de deploy..." -ForegroundColor Cyan
Write-Host "URL: $WebhookUrl" -ForegroundColor Gray

try {
    $response = Invoke-RestMethod -Uri $WebhookUrl -Method Post -ContentType "application/json" -Body "{}"
    
    Write-Host "`nDeploy disparado com sucesso no Easypanel!" -ForegroundColor Green
    Write-Host "Acompanhe o status no painel web." -ForegroundColor Yellow
}
catch {
    Write-Host "`nErro ao disparar o webhook:" -ForegroundColor Red
    Write-Error $_.Exception.Message
    exit 1
}
