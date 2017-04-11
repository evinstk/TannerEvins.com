'use strict'

import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'

const DEV_PORT = 3000
const PUBLIC = path.join(__dirname, '..', 'public')

const app = express()
app.set('view engine', 'pug')
app.use(favicon(path.join(PUBLIC, 'favicon.ico')))
app.use(express.static(PUBLIC))

const viewRoutes = ['/', '/resume']
viewRoutes.forEach(route => {
    app.get(route, (req, res) => {
        res.render('index')
    })
})

app.listen(DEV_PORT, () => console.log(`Listening on port ${DEV_PORT}`))
