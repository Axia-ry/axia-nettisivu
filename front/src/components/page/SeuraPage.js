import React, { Component } from 'react';

import Text from '../common/Text'

class SeuraPage extends Component{
  render() {
    return (
      <div>
        <h2>Seuran tiedot</h2>
        <ul>
          <li className="seura-link"><a target='_blank' href="https://drive.google.com/file/d/1QS122oFPdqaxoKQqzn4Krh7-mP2J8JYD/view?usp=sharing">Hallinnon tehtävät ja vuosikello</a></li>
          <li className="seura-link"><a target='_blank' href="https://drive.google.com/open?id=1E8cnGc3JHWP5jDI7oiVMWd733PLdnhQR">Joukkuepelisäännöt</a></li>
          <li className="seura-link"><a target='_blank' href="https://drive.google.com/open?id=1MujGFuvrNDzVPTzz5WZYCeui_Oj1c7IV">Säännöt</a></li>
        </ul>
        <Text location='seuraText'/>
      </div>
    )
  }
}

export default SeuraPage
