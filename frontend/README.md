# Estabiliza el Reactor – Evaluación II Programación Web

## Ejecutar
```bash
# Terminal 1
cd backend && npm install && npm run dev   # http://localhost:4000

# Terminal 2
cd frontend && npm install && npm run dev   # http://localhost:5173
```
Para ver la temperatura objetivo al probar: `DEBUG_REACTOR=1 npm run dev` (en Windows PowerShell: `$env:DEBUG_REACTOR=1; npm run dev`).

## Endpoints
| Método | Ruta | Descripción |
|---|---|---|
| POST | /adjust | Recibe `{ temperatura }` y responde `mas_alta`, `mas_baja` o `estabilizado` |
| POST | /reboot | Genera una nueva temperatura de estabilización |
