let mongoose = require('mongoose')

let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }

let connectionString = `mongodb://127.0.0.1:27017/tyler-the-creator-api`

mongoose.connect(connectionString, mongooseConfig)

mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error => console.error("Database error\n", error))

module.exports = mongoose.connection