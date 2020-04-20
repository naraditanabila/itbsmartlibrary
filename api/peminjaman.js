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
app.post('/peminjaman/add',async(req,res) => {
    try {
        const {id_anggota, id_buku} = req.body
        await db.query(`insert into transaksi(id_anggota, id_buku, tgl_pinjam, tgl_kembali, status_pinjam)
         values('${id_anggota}', '${id_buku}', now(), now() + interval '14 days', true`)
        console.log(req.body)
        const resData = await dbPromise.query(`select * from transaksi order by id_transaksi desc limit 1`)
        res.json(resData.rows)
    } catch (error) {
        console.log(error)
        res.json('error')
    }
})

//update peminjaman ketika mengembalikan (PUT) -- updateTransaction
app.put('/peminjaman/update',async(req,res)=>{
    const {hari, jam, psikolog, availability} = req.body
    
    await db.query(`update jadwal set hari = '${hari}', jam = '${jam}', psikolog = '${psikolog}', availability = ${availability}
    where id = ${id}`)
    res.json('data berhasil diubah')
})

//menampilkan data peminjaman berdasarkan id anggota (GET) -- searchTransaction
app.get('/peminjaman/search/anggota/:id_anggota',async(req, res)=>{
    const id_anggota = req.params.id_anggota
    const resData = await db.query(`select * from transaksi where id_anggota='${id_anggota}' order by tgl_pinjam desc`)
    res.json(resData.rows)
})

//menampilkan data peminjaman berdasarkan id buku (GET) -- getTransactionList
app.get('/peminjaman/search/buku/:id_buku',async(req, res)=>{
    const id_buku = req.params.id_buku
    const resData = await db.query(`select * from transaksi where id_buku='${id_buku}' order by tgl_pinjam desc`)
    res.json(resData.rows)
})

//menampilkan seluruh data peminjaman (GET)
app.get('/peminjaman/list/all',async(req, res)=>{
    const resData = await db.query('select * from transaksi order by id_transaksi')
    res.json(resData.rows)
})

module.exports = app;