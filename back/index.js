const http = require('http')
const express = require('express')
const app = express()
//const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./utils/config')
//const getAuthorizationToken = require('./utils/middleware')

const textsRouter = require('./controllers/texts')
const teamsRouter = require('./controllers/teams')

app.use(express.static('build'))
app.use(cors())
//app.use(bodyParser.json())

app.use('/api/texts', textsRouter)
app.use('/api/teams', teamsRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
})

module.exports = {
  app, server
}
