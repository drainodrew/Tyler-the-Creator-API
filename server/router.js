let express = require('express')
let equipmentRouter = require('./equipment/router')
let shopRouter = require('./shops/router')

let router = new express.Router()

router.use('/equipment', equipmentRouter)
router.use('/shops', shopRouter)

module.exports = router
