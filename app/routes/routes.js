const express = require('express');
const filesRouter = require('./files/files.router');

// Create a new router instance and export it (so it can be used in app.js).
const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/', router);
  // General routes
  router.use('/files', filesRouter);
};

module.exports = routerApi;
