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

//cek validasi anggota berdasarkan id umum (GET)
app.get('/umum/:id_umum', async(req,res) => {
    let ret;
    const id_umum = req.params.id_umum
    dbPromise.query('SELECT anggota.id_anggota, umum.id_umum, umum.nama, umum.alamat, umum.no_hp, umum.email, umum.pekerjaan FROM umum, anggota WHERE id_umum=$1 and umum.id_umum=anggota.id_umum',[id_umum], (err,result) => {
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
                result: 'nomor identitas tidak terdaftar'
            };
            res.json(ret)
        }
    })
})

//cek validasi anggota berdasarkan nim (GET)
app.get('/mahasiswa/:nim', async(req,res) => {
    let ret;
    const nim = req.params.nim
    dbPromise.query('SELECT  anggota.id_anggota, mahasiswa.nim, mahasiswa.nama, mahasiswa.fakultas, mahasiswa.prodi, mahasiswa.angkatan FROM anggota,mahasiswa where nim=$1 and mahasiswa.nim=anggota.nim',[nim], (err,result) => {
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
                result: 'nim tidak valid'
            };
            res.json(ret)
        }
    })
})

module.exports = app;