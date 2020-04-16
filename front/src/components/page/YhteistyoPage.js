import React, { Component } from 'react';

import Text from '../common/Text'

class YhteistyoPage extends Component{
  render() {
    return (
      <div>
        <h2>POP Vakuutus ja AxiA ry yhteistyössä!</h2>
        <Text location='yhteistyoText'/>
        <a className="seura-link" target='_blank' href="https://www.popvakuutus.fi/asiakaspalvelu/yhteistyokumppaneiden-edut">Ota POP-vakuutus</a>
      </div>
    )
  }
}

export default YhteistyoPage
