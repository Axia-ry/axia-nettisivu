const textsRouter = require('express').Router()

textsRouter.get('/', (request, response) => {
  response.json([
    {Location: 'mainText', Text: "AxiA ry on tuusulalainen salibandyseura. Seuran tavoitteena on tarjota harraste - ja kilpasarja joukkuetoimintaa eri ikäisille. Pelaamme Salibandyliiton Etelä-Suomen sarjoissa. Myös lasten vanhemmat on huomioitu toiminnassa."
    },
    {Location: 'seuraText', Text: `AxiA ry . Perustettu 2014 . LY-tunnus 2745147-7

    Johtokunta 2018:
    
    Jukka Klint puheenjohtaja
    Ismo Liljendahl sihteeri
    Tommi Forss jäsen
    
    Rahastonhoitajat:
    
    Camilla Klint Emoseura
    Kari Sillman 04-joukkue
    Laura Raitala oto 08-joukkue
    Tiia Sarvasilta 09-joukkue
    
    Tilintarkastus:
    
    Hellä Päiviö
    `}])
})

module.exports = textsRouter