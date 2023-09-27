const exp = require('constants');
const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app)

app.set('view engine','ejs');

app.use(express.static('CSS'))
app.use(express.static('views'))
app.use(express.static('images'))

app.get('/',(req,res) => {
    res.render('index')
})

server.listen(3000 ,() => {
    console.log('Port running on 3000')
})