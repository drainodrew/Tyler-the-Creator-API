let express = require('express')
let router = require('./router')
import cors from "cors"

// Create an app and set the PORT
let app = express()

// Set the default middlewares
app.use(express.json())
app.use(cors())
app.use(router)

// Set a default route for all requests
app.use("/tyler-the-creator-api", routes)



module.exports = app
