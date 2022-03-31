let express = require('express')
let discographyRouter = require('./discography/router')

let router = new express.Router()

router.use('/discography', discographyRouter)

module.exports = router
