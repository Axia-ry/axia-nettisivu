import React, { Component } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class NavigationLink extends Component {
  render = () => {
    const link = this.props.link
    const relative = this.props.relative

    const active = this.props.location.pathname === link;
    const innerClassName = 'full flex-container justify-around'

    return (
      <div className={'flex-item navigation-link' + (active ? ' selected-link' : '')} >
        {!relative ? (<a target='_blank' rel='noopener noreferrer' className={innerClassName} href={link}>{this.props.children}</a>) 
                  : (<Link className={innerClassName} to={link}>{this.props.children}</Link>)}
      </div>
    )
  }
}

export default withRouter(connect(() => ({}), {})(NavigationLink));