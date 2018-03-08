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
import keyBy from 'lodash/fp/keyBy'
import mapValues from 'lodash/fp/mapValues'
import {
  companies,
  experience,
  expPoints,
  honors,
  languages,
  skills,
  software
} from './data'

const keyById = keyBy('_id')
const mapKeyById = mapValues(keyById)

const DEV_PORT = 3000
const PUBLIC = path.join(__dirname, '..', 'public')

const app = express()
app.use(favicon(path.join(PUBLIC, 'favicon.ico')))
app.use(express.static(PUBLIC))

const viewRoutes = ['/', '/resume']
viewRoutes.forEach(route => {
  app.get(route, (req, res) => {
    match({ routes, location: req.url }, (err, redirect, props) => {
      const { html, state } = makeStateAndHTML({
        entities: mapKeyById({
          companies,
          experience,
          expPoints,
          honors,
          languages,
          skills,
          software
        })
      }, props)
      res.send(renderPage(html, state))
    })
  })
})

const makeStateAndHTML = (initialState, matchProps) => {
  const store = createStore(rootReducer, initialState)
  const state = store.getState()
  const html = renderToString(
    <Provider store={store}>
      <RouterContext {...matchProps} />
    </Provider>
  )
  return { state, html }
}

const renderPage = (html, preloadedState) => `
<!doctype html>
<html>
  <head>
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
    <link rel="icon" sizes="32x32" type="imag/png" href="favicon.png" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="css/base.css" />
    <title>TannerEvins.com</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script type="text/javascript" src="app.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-77823634-1', 'auto');
      ga('send', 'pageview');
    </script>
  </body>
</html>
`

app.listen(DEV_PORT, () => console.log(`Listening on port ${DEV_PORT}`))
