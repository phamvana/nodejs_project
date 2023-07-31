const newsRouter = require('./news');
const sitesRouter = require('./site');

function route(app) {
  // [new]
  app.use('/news', newsRouter);
  // [search]
  app.get('/search', sitesRouter);
  // []
  app.use('/', sitesRouter);
}

module.exports = route;
