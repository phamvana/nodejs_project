class NewsController {
  // [GET] /new
  index(req, res) {
    res.render('news');
  }

  // [GET] /:slug
  show(req, res) {
    res.send('Xin chao day la ham show!!!');
  }
}

module.exports = new NewsController();
