import * as fs from "node:fs"
import express from "express"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import getDailyNews from "./news/news.js";

const _dirname = dirname(fileURLToPath(import.meta.url)).slice(0, -6)
const getFileLink = url => `${_dirname.replace(/\\/g, '\/')}client${url}`

const clientEndpoints = /.+\.(html|css|js|png|svg|ico|png|ttf)/

const app = express()

app.get('/', (req, res) => {
  res.sendFile('client/tpl/main.html', {root : _dirname})
})

app.get('/api/getDailyNews', async (req, res) => {
  res.setHeader("Content-Type", "text/json")
  res.send(await getDailyNews())
})

app.get(clientEndpoints, (req, res) => {
  fs.access(getFileLink(req.url), (err) => {
    if (err) {
      res.sendStatus(404)
      res.end()
    }
    else 
      res.sendFile(`client${req.url}`, {root : _dirname})
  })
})

const PORT = process.env.HTTP_PORT || 8080
const HOSTNAME = process.env.HTTP_HOSTNAME || '127.0.0.1'

app.listen(PORT, HOSTNAME, () => console.log(`server is listening at http://${HOSTNAME}:${PORT}`))