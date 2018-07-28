import React from 'react';

import NavigationBar from './NavigationBar'
import LogoLine from './LogoLine'

const Header = () => (
  <div className='header flex-container flex-vertical'>
    <LogoLine/>
    <NavigationBar/>
  </div>
)

export default Header