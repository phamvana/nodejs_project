const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');

//sattic --> xử lý file tĩnh
app.use(express.static(path.join(__dirname,'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs',handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resourse\\views'));

// Routes init
route(app);

app.listen(port, ()=>console.log(`Trang web dang chay http://localhost:${port}`));