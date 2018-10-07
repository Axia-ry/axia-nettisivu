const teamsRouter = require('express').Router()

teamsRouter.get('/', (request, response) => {
  response.json([
    {
      Name: 'AxiA 04 joukkue', 
      Coach: 'Vastuuvalmentaja Marco Uusimaa, jojo Ismo Liljendahl', 
      PracticeTime: 'Ma klo 18-20 Jokelan koulukeskus, Ke klo 17.30-19 Kellokosken Woima -sali, La klo 9-11 Kellokosken Woima -sali, Su klo 18-20 Isät / pojat', 
      ImageLink: '/images/axia_04.jpg'
    }, 
    {
      Name: 'Axia 08 ja 09 joukkueet', 
      Coach: 'Vastuuvalmentaja Tuomas Laukka 08, Vastuuvalmentaja Teemu Kiuttu 09, Apuvalmentajat Tuomas Tella, Jussi Niemi, Jojo Laura Raitala , Nikke Holopainen', 
      PracticeTime: 'Ke klo 16.30-17.30 Kellokosken Woima -sali, Pe klo 17.30 -19 Kellokosken Woima -sali, Su klo 12 -13.30  Kellokosken Woima -sali', 
      ImageLink: '/images/axia_09.jpg'
    },
    {
      Name: 'AxiA kerhot (ikäluokat 2010-2011)',  
      PracticeTime: 'Pe klo 16.30 - 17.30 Kellokosken Woima -sali, ti klo 16.30 -17.30 Paijalan koulu', 
      ImageLink: '/images/logo.gif'
    }
  ])
})

module.exports = teamsRouter