
const mongoose = require("mongoose");

const schema = mongoose.Schema({
    asli:{
        type:String,
        required:true,
        },
    nakli:{
        type:String,
        required:true,
        unique: true
    },
})


const URL = mongoose.model('url',schema);

module.exports = URL;
