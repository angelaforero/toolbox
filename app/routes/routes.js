const express = require("express");
const filesRouter = require("./files/files.router");

// Create a new router instance and export it (so it can be used in app.js).
const routerApi = (app) => {
  const router = express.Router();

  /**
   * @swagger
   * /api/files/data:
   *   get:
   *     summary: List of all file descriptions
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   file:
   *                     type: string
   *                     description: Name of csv file.
   *                   text:
   *                     type: string
   *                     description: Text content.
   *                   number:
   *                     type: integer
   *                     description: Number from file.
   *                   hex:
   *                     type: string
   *                     description: Hexa code.
   */
  app.use("/api/", router);
  // General routes
  router.use("/files", filesRouter);
};

module.exports = routerApi;
