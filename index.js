const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");
const app = express();
app.use(express.json());
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
mongoose.connect('mongodb://127.0.0.1:27017/saurav');

app.get('/',async (req,res)=>{
    const shortID= shortid();
    const body = req.body;
    if(!body.url)  return res.status(401).json( { error:'url is required' } );
    await URL.create({
        asli:body.url,
        nakli:shortID,
    })
    res.json({id:shortID});
});
app.get('/:shortId',async (req,res)=>{
      const id = req.params.shortId;
      console.log(id);
      const entry = await URL.findOne({nakli: id })
      console.log(entry);
       
      res.redirect(entry.asli);
});
app.listen(8000,()=> console.log("started"));