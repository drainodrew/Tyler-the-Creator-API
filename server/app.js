let express = require('express')
let router = require('./router')
let cors = require ("cors")

// Create an app and set the PORT
let app = express()

// Set the default middlewares
app.use(express.json())
app.use(cors())
app.use(router)


module.exports = app
