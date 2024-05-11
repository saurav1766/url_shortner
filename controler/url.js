
const shortid = require("shortid");
const URL = require('../models/url');
const idgenerater = async (req,res)=>{
    const shortID= shortid();
    const body = req.body;
    if(!body.url)  return res.status(401).json( { error:'url is required' } );
    await URL.create({
        asli:body.url,
        nakli:shortID,
    })
    res.json({id:shortID});
}

const redirectingurl = async (req,res)=>{
    const id = req.params.shortid;
    console.log(id);
    const entry = await URL.findOne({nakli: id })
    console.log(entry);
     
    res.redirect(entry.asli);
}

module.exports = {
    idgenerater,redirectingurl
}