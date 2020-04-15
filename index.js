const Express = require('express')
const bodyParser = require('body-parser')
const Pool = require('pg').Pool
require('dotenv').config()

const app = Express()
const port = 3000

const db = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    ssl: false
})

var anggotaRouter = require('./api/anggota')
var bukuRouter = require('./api/buku')
var loginRouter = require('./api/login')
var peminjamanRouter = require('./api/peminjaman')

db.connect()
app.use(bodyParser())

app.use(anggotaRouter)
app.use(bukuRouter)
app.use(loginRouter)
app.use(peminjamanRouter)
app.listen(port, ()=>console.log('web service berhasil dijalankan'))