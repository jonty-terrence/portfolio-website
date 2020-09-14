import React from 'react'

import NameTag from './NameTag'
import Nav from './Nav'

class Header extends React.Component {
  render () {
    return (
      <div className="header-container">
        <NameTag />
        <Nav />
      </div>
    )
  }
}

export default Header
