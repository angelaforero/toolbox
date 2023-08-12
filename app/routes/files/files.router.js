var express = require('express');
const router = express.Router();
const FilesService = require('../../services/files.service');
const filesService = new FilesService();

/* GET home page. */
router.get('/data', async function(req, res, next) {
  try {
    const data = await filesService.getTransformationData();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
