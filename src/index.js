'use strict'

const express = require('express')
const path = require('path')

const DEV_PORT = 3000
const PUBLIC = path.join(__dirname, '..', 'public')

const app = express()
app.set('view engine', 'pug')
app.use(express.static(PUBLIC))

const viewRoutes = ['/']
viewRoutes.forEach(route => {
    app.get(route, (req, res) => {
        res.render('index')
    })
})

app.listen(DEV_PORT, () => console.log(`Listening on port ${DEV_PORT}`))
