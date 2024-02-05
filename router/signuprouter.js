const express = require('express')
const router = express.Router()
const { getsignupPage, getPostpage } = require('../controllers/signupcontroller')



router.get("/", getsignupPage)
router.post("/", getPostpage);

exports.router = {
    path : "/signup",
    router
}