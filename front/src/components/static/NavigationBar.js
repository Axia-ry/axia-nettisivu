import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import NavigationLink from './NavigationLink';

class NavigationBar extends Component {
  render = () => {
    return (
      <div className='flex-container justify-around navigation-bar'>
        <NavigationLink link='/' relative={true}>Etusivu</NavigationLink>
        <NavigationLink link='/seura' relative={true}>Seura</NavigationLink>
        <NavigationLink link='https://google.com' relative={false}>Nimenhuuto</NavigationLink>
        <NavigationLink link='https://translate.google.fi/' relative={false}>Ilmoittautuminen</NavigationLink>
      </div>
    )
  }
}

export default withRouter(connect(() => ({}), {})(NavigationBar));