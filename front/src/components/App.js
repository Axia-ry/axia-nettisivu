import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

import Header from './static/Header'
import Footer from './static/Footer'
import Content from './page/Content'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Content/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
