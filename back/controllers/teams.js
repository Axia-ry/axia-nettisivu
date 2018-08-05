const teamsRouter = require('express').Router()

teamsRouter.get('/', (request, response) => {
  response.json([
    {Name: 'Axia 04', Coach: 'Martti', PracticeTime: 'Maanantai', ImageLink: '/images/logo.gif'}, 
    {Name: 'Axia 08', Coach: 'Maija', PracticeTime: 'Tiistai', ImageLink: '/images/logo.gif'}
  ])
})

module.exports = teamsRouter