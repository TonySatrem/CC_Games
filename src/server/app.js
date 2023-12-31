const express = require('express')

const app = express()

const dirname = __dirname.substring(0, __dirname.length - 6)

app.get('/', (req, res) => {
  res.sendFile('client/main/index.html', {root : dirname})
})

app.get('/*.css', (req, res) => {
  res.sendFile(`client/main/${req.url}`, {root : dirname})
})

app.get('/*.png', (req, res) => {
  res.sendFile(`client/${req.url}`, {root : dirname})
})

app.get('/*.svg', (req, res) => {
  res.sendFile(`client/${req.url}`, {root : dirname})
})

const PORT = process.env.HTTP_PORT || 8080
const HOSTNAME = process.env.HTTP_HOSTNAME || '127.0.0.1'

app.listen(PORT, HOSTNAME, () => console.log(`server is listening at http://${HOSTNAME}:${PORT}`))