const mongoose = requrie('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    name:{ type:String, default: ''},
    description :{ type:String, default: ''},
    image: {type:String},
    created_at:{type:Date, default:Date.now},
    updated_at:{ type:Date, default:Date.now}
});

module.exports = mongoose.model('Post', Post);