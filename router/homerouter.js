const express = require('express')
const router = express.Router()
const { gethomePage } = require('../controllers/homecontroller')



router.get("/", gethomePage)

exports.router = {
    path : "/",
    router
}