const express = require('express');
const router = express.Router();

const sitesController = require('../app/controllers/SitesController');

// newsController.show
router.use('/search', sitesController.search);
// newsController.index
router.use('/', sitesController.index);

module.exports = router;
