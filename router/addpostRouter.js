const express = require('express')
const router = express.Router()
const { getaddpostpage, getaddpostPostpage } = require('../controllers/addpostcontroler')



router.get("/",getaddpostpage)
router.post("/", getaddpostPostpage);

exports.router = {
    path : "/addpost",
    router 
}