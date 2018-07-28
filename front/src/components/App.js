import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

import './Common.css'
import './App.css'

import Header from './static/Header'
import Footer from './static/Footer'
import Content from './page/Content'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='flex-container flex-vertical full'>
          <Header/>
          <Content/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
