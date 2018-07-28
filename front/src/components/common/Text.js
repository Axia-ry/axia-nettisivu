import React, { Component } from 'react';

class Text extends Component{
  render() {
    const paragraphs = this.props.text.split('\n')

    return (
      <div>
        {paragraphs.map((element, index) => (<p key={index}>{element}</p>))}
      </div>
    )
  }
}

export default Text