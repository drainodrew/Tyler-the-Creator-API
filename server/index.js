let app = require('./app')

let server = app.listen(process.env.PORT)

server.on('listening', ()=> console.log("Listening on port " + PORT))
server.on('error', error=> console.error("Server connection error\n", error))
