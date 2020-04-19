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
//add data buku baru (POST)
app.post('/buku/add',async(req,res) => {
    try {
        //const id_buku = req.params.id_buku
        const {judul, author, lokasi, jml_total, jml_pinjam} = req.body
        const jml_avail = jml_total - jml_pinjam;
        await dbPromise.query(`insert into umum(judul, author, lokasi, jml_total, jml_pinjam, jml_avail)
            values('${judul}','${author}','${lokasi}','${jml_total}','${jml_pinjam}','${jml_avail}')`)
        console.log(req.body)
        res.json('Data buku baru berhasil ditambahkan')
    } catch (error) {
        console.log(error)
        res.json('error')
    }
})

//Update stok buku (PUT)


//Cari buku berdasarkan judul (GET)
app.get('/buku/search/:judul', async(req,res) => {
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
})

module.exports = app;