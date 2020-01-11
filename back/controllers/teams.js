const teamsRouter = require('express').Router()

teamsRouter.get('/', (request, response) => {
  response.json([
    {
      Name: 'AxiA 04 kilpa',
      Coach: 'Vastuuvalmentaja Marco Uusimaa, jojo Ismo Liljendahl',
      PracticeTime: 'Ma klo 18-20 Jokelan koulukeskus, Ke klo 17.30-19 , La klo 9-11 , Su klo 18-20 Isät / pojat Kellokosken Woima -sali',
      ImageLink: '/images/axia_04.jpg'
    },
    {
      Name: 'Axia 08 ',
      Coach: 'Vastuuvalmentaja Tuomas Laukka, Valmentaja Teemu Kiuttu, Apuvalmentajat Aukusti Forss, Jojo Laura Raitala',
      PracticeTime: 'Ke klo 16.30-17.30, Pe klo 17.30 -19 , Su klo 12 -13.30  Kellokosken Woima -sali',
      ImageLink: '/images/axia_08.jpg'
    },
    {
      Name: 'AxiA 10 (ikäluokat 2010-2012)',
      PracticeTime: 'Pe klo 16.30 - 17.30 , su klo 13.30 - 15 Kellokosken Woima -sali',
      ImageLink: '/images/axia_10.jpg'
    },
    {
      Name: 'AxiA kerhot',
      PracticeTime: 'Pe klo 16.30 Kellokosken Woima -sali, Ti klo 16.30 Paijalan koulu',
      ImageLink: '/images/logo.gif'
    }
  ])
})

module.exports = teamsRouter
