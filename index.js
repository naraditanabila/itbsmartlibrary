const Express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT||3001
const app = Express()
const Pool = require('pg').Pool
require('dotenv').config()

const db = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  ssl: true
})

db.connect();


const anggotaRouter = require('./api/anggota')
const bukuRouter = require('./api/buku')
const peminjamanRouter = require('./api/peminjaman')


app.use(bodyParser())
app.use(cors())

app.use(anggotaRouter)
app.use(bukuRouter)
app.use(peminjamanRouter)

 
var static = require ('node-static')
var file = new static.Server();

require('http').createServer(function(request, response){
  request.addListener('end', function() {
    file.serve(request,response);
  }).resume();
}).listen(port);

/*app.listen(port, function() {
  console.log(`Server Starts on '${port}'`)
});*/
