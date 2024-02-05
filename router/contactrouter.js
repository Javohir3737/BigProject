const express = require('express')
const router = express.Router()
const { getcontactPage } = require('../controllers/contactcontroller')



router.get("/", getcontactPage)

exports.router = {
    path : "/contact",
    router
}