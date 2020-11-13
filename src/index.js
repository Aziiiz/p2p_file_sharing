const PeerId = require('peer-id')
const multiaddr = require('multiaddr')
const Node = require('./libp2p_bundle')
const {stdinTostream, streamToConsole} = require('./stream')
const express = require('express')
const bodyParser = require('body-parser')
const http = require('http').createServer(app)
const io = require('socket.io')(http)


const PORT = 8080
var app  = express()


app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(bodyParser.json)
// app.use(bodyParser.urlencoded({extended: true}))



app.get('/signup', async(req,res)=> {
    const genID = await PeerId.create({bits:1024, keyType: 'rsa'})
    res.send(JSON.stringify(genID.toJSON(), null, 2))
})



app.get('/chat', (req,res)=> {
    res.send({"status": "healthy"})
    res.send({"new": "newMessage"})
})



app.listen(PORT, ()=> {  
    console.log("Server listening on Port", PORT); 
})
