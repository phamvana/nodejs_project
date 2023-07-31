const express = require('express');
const router = express.Router();

const sitesController = require('../app/controllers/SitesController');

// newsController.show
router.get('/search', sitesController.search);
// newsController.index
router.get('/', sitesController.index);

module.exports = router;
