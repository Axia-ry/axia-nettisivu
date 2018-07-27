import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class NavigationBar extends Component {
  render = () => {
    return (
      <div>
        <div><Link to='/'>Etusivu</Link></div>
        <div><Link to='/seura'>Seura</Link></div>
        <div><a href=''>Nimenhuuto</a></div>
        <div><a href=''>Ilmoittautuminen</a></div>
      </div>
    )
  }
}

export default withRouter(connect(() => ({}), {})(NavigationBar));