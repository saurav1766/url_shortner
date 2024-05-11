const express = require("express");
const app = express();
const route = express.Router();
const {idgenerater,redirectingurl} = require('../controler/url')
route.post('/',idgenerater);
route.get('/:shortid',redirectingurl);
module.exports = route;