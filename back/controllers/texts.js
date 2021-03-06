const textsRouter = require('express').Router()

textsRouter.get('/', (request, response) => {
  response.json([
    {Location: 'mainText', Text: `Axia ry on kerhotoimintaan keskittyvä tuusulalainen seura. 

    Seura järjestää:
    - urheilukerhoja
    - robotiikan kilpailukerhoja
    - ohjelmoinnin kerhoja ja koulutusta eri ohjelmointivälineillä
    - kesäleirejä
    `
    },
    {Location: 'seuraText', Text: `AxiA ry . Perustettu 2014 . LY-tunnus 2745147-7

    Johtokunta 2021:
    Jukka Klint puheenjohtaja
    Mira Ruohonen sihteeri
    Kati Korhonen jäsen

    Rahastonhoitaja:
    Camilla Klint 

    Tilintarkastus:
    Hellä Päiviö

    `},
    {
      Location: 'yhteistyoText', Text: `
      POP Vakuutus tarjoaa AxiA ry:n jäsenille uusista vakuutuksista 25 euron alennuksen ensimmäisen vuoden maksuista. Alennuksen voit hyödyntää uusiin sopimuksiin, olit sitten uusi asiakas tai asiakas jo ennestään.
Alennusta ei siis voi hyödyntää voimassaoleviin vakuutuksiin.
Alennuskoodit ovat AXIANE = tämä on 04 joukkueen koodi, AXIAKA = tämä on 08 joukkueen koodi ja AXIAKY = tämä on 10 joukkueen koodi ja ne voi hyödyntää verkkokaupassa tai puhelimitse numerossa 010 3910 392.
Alennus koskee kaikkia uusia vapaaehtoisia vakuutuksia, joita ovat esimerkiksi ajoneuvon kasko-, vene-, koti-, matka- ja tapaturmavakuutus. Alennusta ei voi hyödyntää liikennevakuutukseen ja/tai määräaikaiseen matkavakuutukseen.
Vakuutukset myöntää Suomen Vahinkovakuutus Oy.`
    }
  ])
})

module.exports = textsRouter
