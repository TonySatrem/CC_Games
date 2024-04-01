import express from "express"
import cors from "cors"
import getDailyNews from "./news/news.js"
import { getFile } from "./lib/getFile.js"
import getContentType from "./lib/getContentType.js"

const app = express()

app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get(/^\/(news)?$/, (req, res) => {
  const { file, path } = getFile({
    isIndex: true,
    req
  })
  
  res.set({
      'Content-Type': getContentType(path),
      'Content-Length': Buffer.byteLength(file)
  })
  
  res.sendFile(path)
})

const clientEndpoints = /.+\.(html|css|js|png|svg|ico|ttf|oft|woff|woff2)/

app.get(clientEndpoints, (req, res) => {
  try {
    const { file, path } = getFile({
      req
    })

    res.set({
      'Content-Type': getContentType(path),
      'Content-Length': Buffer.byteLength(file)
    })

    res.sendFile(path)
  }
  catch (err) {
    console.error(err)
    res.sendStatus(404)
    res.end()
  }
})

app.get('/api/getDailyNews', async (req, res) => {
  res.setHeader("Content-Type", "text/json")
  res.send(await getDailyNews())
})

const PORT = process.env.HTTP_PORT || 8080
const HOSTNAME = process.env.HTTP_HOSTNAME || '127.0.0.1'

app.listen(PORT, HOSTNAME, () => console.log(`server is listening at http://${HOSTNAME}:${PORT}`))