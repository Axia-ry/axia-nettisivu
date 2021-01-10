const teamsRouter = require('express').Router()

teamsRouter.get('/', (request, response) => {
  response.json([
    {
      Name: 'AxiA kerhot',
      PracticeTime: 'Pe klo 16-17 luokat 5-6, klo 17-18 luokat 1-2 ja klo 18-19 luokat 3-4',
      PracticePlace: 'Kellokosken Woima –sali',
      ImageLink: '/images/logo.gif'
    }
  ])
})

module.exports = teamsRouter