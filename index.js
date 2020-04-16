/*const Express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = Express()
const port = 3000

var anggotaRouter = require('./api/anggota')
var bukuRouter = require('./api/buku')
var loginRouter = require('./api/login')
var peminjamanRouter = require('./api/peminjaman')

app.use(bodyParser())
app.use(cors())

app.use(anggotaRouter)
app.use(bukuRouter)
app.use(loginRouter)
app.use(peminjamanRouter)
app.listen(port, ()=>console.log('web service berhasil dijalankan'))*/

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);