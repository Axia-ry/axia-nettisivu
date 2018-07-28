import React, { Component } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class NavigationLink extends Component {
  render = () => {
    const link = this.props.link
    const relative = this.props.relative

    return (
      <div>
        {!relative ? (<a target='_blank' rel='noopener noreferrer' href={link}>{this.props.children}</a>) 
                  : (<Link to={link}>{this.props.children}</Link>)}
      </div>
    )
  }
}

export default withRouter(connect(() => ({}), {})(NavigationLink));