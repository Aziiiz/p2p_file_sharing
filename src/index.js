const PeerId = require('peer-id')
const multiaddr = require('multiaddr')
const Node = require('./libp2p_bundle')
const {stdinTostream, streamToConsole} = require('./stream')
const express = require('express')
const bodyParser = require('body-parser')

const app  = express()



app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended: true}))



app.get('/user', async(req,res)=> {
    const genID = await PeerId.create({bits:1024, keyType: 'rsa'})
    res.send(JSON.stringify(genID.toJSON(), null, 2))
})

app.get('/', (req,res)=> {
    res.send({"hey": "hello"})
})



app.listen(3000, function(err){ 
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port", 3000); 
})
