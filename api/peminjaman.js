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
    ssl: true
})

dbPromise.connect()
//add peminjaman (POST) -- addNewTransaction


//update peminjaman ketika mengembalikan (PUT) -- updateTransaction


//menampilkan data peminjaman berdasarkan id anggota (GET) -- searchTransaction


//menampilkan data peminjaman berdasarkan id buku (GET) -- getTransactionList


module.exports = app;