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
//add peminjaman (POST)


//update peminjaman ketika mengembalikan (PUT)


//menampilkan data peminjaman berdasarkan id anggota (GET)
/*app.get('/peminjaman/search/:id_anggota', async(req,res) => {
    let ret;
    const id_anggota = req.params.id_anggota
    dbPromise.query('SELECT id_transaksi, id_anggota, id_buku, tgl_pinjam, tgl_kembali, status_pinjam, denda FROM peminjaman WHERE id_anggota=$1',[id_anggota], (err,result) => {
        if (!err){
            ret={
                status:200,
                result: result.rows
            };
            res.status(200).json(ret)
        }
        else {
            ret={
                status:err.code,
                result: 'data buku tidak ditemukan'
            };
            res.json(ret)
        }
    })
})*/

//menampilkan data peminjaman berdasarkan id buku (GET)
/*app.get('/peminjaman/search/:id_buku', async(req,res) => {
    let ret;
    const judul = req.params.judul
    dbPromise.query('SELECT id_buku, judul, author, lokasi, jml_avail FROM buku WHERE judul=$1',[judul], (err,result) => {
        if (!err){
            ret={
                status:200,
                result: result.rows
            };
            res.status(200).json(ret)
        }
        else {
            ret={
                status:err.code,
                result: 'data buku tidak ditemukan'
            };
            res.json(ret)
        }
    })
})*/

module.exports = app;