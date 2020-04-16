import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { Route } from 'react-router-dom'

import MainPage from './MainPage'
import SeuraPage from './SeuraPage'
import YhteistyoPage from './YhteistyoPage'

const Content = () => (
  <div className='flex-item content scroll-vertical'>
    <Route exact path="/" render={() => (<MainPage/>)}/>
    <Route exact path="/seura" render={() => (<SeuraPage/>)}/>
    <Route exact path="/yhteistyo" render={() => (<YhteistyoPage/>)}/>
  </div>
)

export default withRouter(connect(() => ({}), {})(Content));
