const express = require('express')
const app = express()
const get = require('./index')

app.get('/anime/:anime/:chap/:ts', (req, res) => {
    console.log(await req.params)
    get('/B/001.ts').then(res.sendFile).catch(console.log)
})

app.listen(80,'0.0.0.0',()=>console.log('server on'))