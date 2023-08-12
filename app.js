const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor
const routerApi = require('./app/routes/routes');


// Ruta de inicio
app.get('/', (req, res) => {
  res.send('Test api ok');
});

// Routes
routerApi(app);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});