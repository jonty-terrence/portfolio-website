import React from 'react'

import Pdf from '../../server/public/jonty-cv-2020.pdf'

class Nav extends React.Component {
  render () {
    return (
      <>
        <nav className="nav-bar">
          <a href="#">Projects,</a>
          <a href={Pdf} target="_blank" rel='noopener noreferrer'>Resume,</a>
          <a href="#">About</a>
        </nav>
      </>
    )
  }
}

export default Nav
