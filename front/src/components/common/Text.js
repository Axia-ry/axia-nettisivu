import React, { Component } from 'react';
import { connect } from 'react-redux'

class Text extends Component{
  render() {
    const text = this.props.textLookup[this.props.location]
    const paragraphs = text == null
      ? []
      : text.split('\n')

    return (
      <div>
        {paragraphs.map((element, index) => (<p key={index}>{element}</p>))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  textLookup: state.texts
})

export default connect(mapStateToProps)(Text)