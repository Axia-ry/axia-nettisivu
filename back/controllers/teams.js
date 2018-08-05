const teamsRouter = require('express').Router()

teamsRouter.get('/', (request, response) => {
  response.json([
    {
      Name: 'AxiA 04 kilpajoukkue', 
      Coach: 'Vastuuvalmentaja Marco Uusimaa, jojo Ismo Liljendahl', 
      PracticeTime: 'Ma klo 18-20 Jokelan koulukeskus, Ke klo 17.30-19 Kellokosken Woima -sali, La klo 9-11 Kellokosken Woima -sali', 
      ImageLink: '/images/logo.gif'
    }, 
    {
      Name: 'Axia 08 harrastejoukkue', 
      Coach: 'Vastuuvalmentaja Tuomas Laukka, valmentajat Tuomas Tella, Miko Kutinlahti, jojo Laura Raitala', 
      PracticeTime: 'To klo 17-18 Hyökkälän ya, Pe klo 18-19 Kellokosken Woima -sali, Su klo 13.30 -15 Kellokosken Woima -sali', 
      ImageLink: '/images/logo.gif'
    },
    {
      Name: 'AxiA 09 kilpajoukkue', 
      Coach: 'Vastuuvalmentaja Teemu Kiuttu , jojo Nikke Holopainen', 
      PracticeTime: 'Ko klo 17-18 Kellokosken Woima -sali, Pe klo 17-18 Kellokosken Woima -sali, Su klo 12 -13.30  Kellokosken Woima -sali', 
      ImageLink: '/images/logo.gif'
    },
    {
      Name: 'Miesten harraste, isät-pojat vuoro',  
      PracticeTime: 'Su klo 18-20 Kellokosken Woima -sali', 
      ImageLink: '/images/logo.gif'
    }
  ])
})

module.exports = teamsRouter