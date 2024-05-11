const express = require("express");
const app = express();

const urlroutes = require('./routes/url')

const connectdb = require("./connect");
connectdb('mongodb://127.0.0.1:27017/saurav');
app.use(express.json());

app.use('/url',urlroutes);
app.listen(8000,()=> console.log("started"));