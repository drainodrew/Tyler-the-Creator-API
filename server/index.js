let app = require('./app')
let PORT = 9000
let server = app.listen(PORT) //(process.env.PORT)

server.on('listening', ()=> console.log("Listening on port " + PORT)) //process.env.PORT))
server.on('error', error=> console.error("Server connection error\n", error))
