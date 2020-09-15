import React from 'react'

import Social from './Social'
import Intro from './Intro'

class HomeBody extends React.Component {
  render () {
    return (
      <div className="home-body">
        <div className="text-box">
          <Intro />
        </div>
        <Social />
      </div>
    )
  }
}

export default HomeBody
