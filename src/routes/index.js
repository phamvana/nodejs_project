const newsRouter = require('./news');
const sitesRouter = require('./site');

function route(app){

    // app.get('/',(req,res)=>{
    //     return res.render('home');
    // });
    
  
    app.use('/news', newsRouter);

    app.get('/search',(req,res)=>{
        return res.render('search');
    });
    app.use('/', sitesRouter);
}

module.exports = route;