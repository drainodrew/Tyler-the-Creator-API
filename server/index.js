let app = require('./app')
let PORT = process.env.PORT || 3000;
let server = app.listen(PORT) 

server.on('listening', ()=> console.log("Listening on port " + PORT))
server.on('error', error=> console.error("Server connection error\n", error))
