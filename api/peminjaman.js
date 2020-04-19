const express = require('express')
const app = express()

const Pool = require('pg').Pool
require('dotenv').config()

const dbPromise = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    ssl: false
})

//add peminjaman

//update peminjaman ketika mengembalikan
//menampilkan data peminjaman berdasarkan id anggota
//menampilkan data peminjaman berdasarkan id buku


module.exports = app;