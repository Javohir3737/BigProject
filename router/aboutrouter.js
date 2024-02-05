const express = require('express')
const router = express.Router()
const { getaboutPage } = require('../controllers/aboutcontroller')



router.get("/", getaboutPage)

exports.router = {
    path : "/about",
    router
}