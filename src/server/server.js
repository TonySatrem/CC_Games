const fs = require('node:fs')
const express = require('express')

const dirname = __dirname.substring(0, __dirname.length - 6)
const getFileLink = url => `${dirname.replace(/\\/g, '\/')}client${url}`
const endpoins = /.+\.(html|css|js|png|svg|ico|png|ttf)/

const app = express()

app.get('/', (req, res) => {
  res.sendFile('client/tpl/main.html', {root : dirname})
})

app.get(endpoins, (req, res) => {
  fs.access(getFileLink(req.url), (err) => {
    if (err) {
      res.sendStatus(404)
      res.end()
    }
    else 
      res.sendFile(`client${req.url}`, {root : dirname})
  })
})

const PORT = process.env.HTTP_PORT || 8080
const HOSTNAME = process.env.HTTP_HOSTNAME || '127.0.0.1'

app.listen(PORT, HOSTNAME, () => console.log(`server is listening at http://${HOSTNAME}:${PORT}`))