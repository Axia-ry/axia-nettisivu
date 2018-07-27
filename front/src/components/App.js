import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './header/Header'

class App extends Component {
  render() {
    console.log("asd")
    return (
      <Router>
        <div>
          <Header/>
          <div>
              <Route exact path="/" render={() => (<div>1</div>)}/>
              <Route exact path="/seura" render={() => (<div>2</div>)}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
