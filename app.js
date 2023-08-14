const express = require('express');
const routerApi = require('./app/routes/routes');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');


//Constants
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 3000;

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Toolbox test',
      version: '1.0.0',
      description: 'Documentation of API in Swagger',
    },
  },
  apis: ['./app/routes/*.js'], // Rutas donde tienes tus comentarios Swagger
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Middleware de Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Allow all origins
app.use(cors());

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