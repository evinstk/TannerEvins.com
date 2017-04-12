'use strict'

import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { match, RouterContext } from 'react-router'
import routes from './routes'
import React from 'react'
import { MongoClient } from 'mongodb'
import { MONGO_URL } from './constants'
import keyBy from 'lodash/fp/keyBy'

const DEV_PORT = 3000
const PUBLIC = path.join(__dirname, '..', 'public')

const app = express()
app.use(favicon(path.join(PUBLIC, 'favicon.ico')))
app.use(express.static(PUBLIC))

const viewRoutes = ['/', '/resume']
viewRoutes.forEach(route => {
    app.get(route, (req, res) => {
        match({ routes, location: req.url }, (err, redirect, props) => {
            connectDB().then(db => {
                Promise.all([
                    findKnownLanguages(db),
                    findKnownSoftware(db),
                    findCompanies(db),
                    findExperience(db)
                ]).then(([languages, software, companies, experience]) => {
                    db.close()
                    const store = createStore(rootReducer, {
                        entities: {
                            languages,
                            software,
                            companies,
                            experience
                        }
                    })
                    const state = store.getState()
                    const html = renderToString(
                        <Provider store={store}>
                          <RouterContext {...props} />
                        </Provider>
                    )
                    res.send(renderPage(html, state))
                })
            }, (err) => {
                res.status(500)
                console.error(err)
                res.send('An error occurred on the server.')
            })
        })
    })
})

const connectDB = () => {
    return new Promise((fulfill, reject) => {
        MongoClient.connect(MONGO_URL, (err, db) => {
            if (err) {
                reject(err)
            } else {
                fulfill(db)
            }
        })
    })
}

const makeFinder = col => (query = {}) => db => (
    new Promise((fulfill, reject) => {
        db.collection(col).find(query).toArray((err, docs) => {
            if (err) {
                reject(err)
            } else {
                fulfill(keyBy('_id')(docs))
            }
        })
    })
)

const findKnownLanguages = makeFinder('languages')({ known: true })
const findKnownSoftware = makeFinder('software')({ known: true })
const findCompanies = makeFinder('companies')()
const findExperience = makeFinder('experience')()

const renderPage = (html, preloadedState) => `
<!doctype html>
<html>
  <head>
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
    <link rel="icon" sizes="32x32" type="imag/png" href="favicon.png" />
    <link rel="stylesheet" type="text/css" href="css/base.css" />
    <title>TannerEvins.com</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
`

app.listen(DEV_PORT, () => console.log(`Listening on port ${DEV_PORT}`))
