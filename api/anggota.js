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

//add anggota baru (POST)
app.post('/register',async(req,res) => {
    try {
        const id_umum = req.params.id_umum
        const {nama, alamat, no_hp, email, pekerjaan} = req.body
        await dbPromise.query(`insert into umum(id_umum, nama, alamat, no_hp, email, pekerjaan)
            values('${id_umum}','${nama}','${alamat}','${no_hp}','${email}','${pekerjaan}')`)
        console.log(req.body)
        res.json('Data anggota baru berhasil ditambahkan')
    } catch (error) {
        console.log(error)
        res.json('error')
    }
})

//cek validasi anggota berdasarkan id anggota


//menampilkan data anggota


module.exports = app;