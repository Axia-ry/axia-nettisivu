import React, { Component } from 'react';
import { connect } from 'react-redux'

import './MainPage.css'

import Text from '../common/Text';

import TeamList from './TeamList';

class MainPage extends Component{
  render() {
    const teams = this.props.teams
    
    return (
      <div>
        <Text location='mainText'/>
        <TeamList teams={teams}/>
        <div>Muut kerhot ja kesätoiminta löytyy aina Liittyminen -välilehden ilmoittautumislinkistä.</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  teams: state.teams
})

export default connect(mapStateToProps)(MainPage)