import React, { Component } from 'react';

import Text from '../common/Text'

class SeuraPage extends Component{
  constructor(props) {
    super(props)

    this.state = {test: ''}
  }

  onChange = event => {
    const value = event.target.value
    console.log(event.target.value === '\n')
    this.setState({'test': value})
  }

  render() {
    const mainText=`Lorem ipsum dolor sit amet, mei ad utinam instructior. Ex vim debitis docendi accusamus, sed ei vocent nusquam accommodare, dicant veniam deleniti usu ad. Has ei agam delenit. Usu mazim quaerendum eu, mei soluta tacimates disputationi at, sed ad timeam dignissim abhorreant. Est ad veritus invidunt, facilis sapientem mea et.
    Vim sumo electram accommodare ne, ne dico vidit maiorum ius. Ius quod velit noluisse ad, eu pertinacia cotidieque eos, zril ponderum praesent ad usu. Ex eam apeirian electram mediocrem. Eos id possim utroque invenire. Vivendo laboramus ei eum.    
    Ex duo fuisset fierent. Nam id bonorum appetere prodesset, cibo impetus incorrupte sea at, at facete causae virtute his. Quo insolens consetetur ad. Mea elit porro putant ex.    
    Te decore dolorem legendos eos, mel debet invenire eloquentiam id. Mel te dolor alienum. Esse alterum et pro, ad veri omittam deterruisset quo. Ius id saperet detraxit. Tation senserit rationibus cu his. Pri eu dolores conceptam, essent omittam petentium qui cu.    
    Vis alia iudico voluptatibus ut. Impetus diceret referrentur no vix, ius ea blandit epicurei. Eius idque pertinax eum eu, option conclusionemque duo ei. Usu suavitate intellegam eu, cum corpora fierent necessitatibus te.`

    return (
      <div>
        <Text text={mainText}/>
        <form>
          <textarea value={this.state.test} onChange={this.onChange}></textarea>
        </form>
      </div>
    )
  }
}

export default SeuraPage