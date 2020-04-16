const textsRouter = require('express').Router()

textsRouter.get('/', (request, response) => {
  response.json([
    {Location: 'mainText', Text: `Axia ry virallinen kevätkokous 2020 ja päätös seuran purkamisesta

    Paikka : Pellonpää 1 Kellokoski
    
    Aika : to 28.5.2020 klo 18 -20`
    },
    {Location: 'seuraText', Text: `AxiA ry . Perustettu 2014 . LY-tunnus 2745147-7

    Johtokunta 2019:
    
    Jukka Klint puheenjohtaja
    Tommi Forss sihteeri
    Teemu Leppälahti jäsen
    
    Rahastonhoitajat:
    
    Camilla Klint Emoseura
    Kari Sillman 04-joukkue
    Tiia Sarvasilta 08-joukkue
    
    Tilintarkastus:
    
    Hellä Päiviö
    `}])
})

module.exports = textsRouter