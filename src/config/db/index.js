const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/pva_blog_dev');
        console.log("Chuc mung ban. Connect thanh cong!!!");
    } catch (error) {
        console.log("Connect that bai!!!");
    }
    
}

module.exports = { connect};
