import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'

import './Common.css'
import './App.css'

import {initTeams} from '../reducers/teamReducer'
import {initTexts} from '../reducers/textReducer'

import Header from './static/Header'
import Footer from './static/Footer'
import Content from './page/Content'

import Team from '../models/Team'
import Text from '../models/Text'

class App extends Component {
  componentDidMount() {
    this.props.initTeams([
      new Team('Axia 04', 'Martti', 'Maanantai', '/images/logo.png'), 
      new Team('Axia 08', 'Maija', 'Tiistai', '/images/logo.png')
    ])

    this.props.initTexts([
      new Text('mainText', `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`
      ),
      new Text('seuraText', `Lorem ipsum dolor sit amet, mei ad utinam instructior. Ex vim debitis docendi accusamus, sed ei vocent nusquam accommodare, dicant veniam deleniti usu ad. Has ei agam delenit. Usu mazim quaerendum eu, mei soluta tacimates disputationi at, sed ad timeam dignissim abhorreant. Est ad veritus invidunt, facilis sapientem mea et.
      Vim sumo electram accommodare ne, ne dico vidit maiorum ius. Ius quod velit noluisse ad, eu pertinacia cotidieque eos, zril ponderum praesent ad usu. Ex eam apeirian electram mediocrem. Eos id possim utroque invenire. Vivendo laboramus ei eum.    
      Ex duo fuisset fierent. Nam id bonorum appetere prodesset, cibo impetus incorrupte sea at, at facete causae virtute his. Quo insolens consetetur ad. Mea elit porro putant ex.    
      Te decore dolorem legendos eos, mel debet invenire eloquentiam id. Mel te dolor alienum. Esse alterum et pro, ad veri omittam deterruisset quo. Ius id saperet detraxit. Tation senserit rationibus cu his. Pri eu dolores conceptam, essent omittam petentium qui cu.    
      Vis alia iudico voluptatibus ut. Impetus diceret referrentur no vix, ius ea blandit epicurei. Eius idque pertinax eum eu, option conclusionemque duo ei. Usu suavitate intellegam eu, cum corpora fierent necessitatibus te.`
  )
    ])
  }

  render() {
    return (
      <Router>
        <div className='flex-container flex-vertical full'>
          <Header/>
          <Content/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default connect(null, {initTeams, initTexts})(App);
