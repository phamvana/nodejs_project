const Post = require('../models/Post');

class SitesController {
  // [GET] /new
  index(req, res) {
    res.json({
      name: 'kiểm tra',
    });
    // res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SitesController();
