const newsRouter = require('./news');


function route(app){

    app.get('/',(req,res)=>{
        return res.render('home');
    });
    
    
    // app.get('/new',(req,res)=>{
    //     return res.render('view');
    // });
    app.use('/news', newsRouter);

    app.get('/search',(req,res)=>{
        return res.render('search');
    });

}

module.exports = route;