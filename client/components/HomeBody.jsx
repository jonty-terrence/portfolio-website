import React from 'react'
import { connect } from 'react-redux'

import Social from './Social'
import Intro from './Intro'
import Work from './Work'
import Projects from './Projects'

let displayedComponent = ''

class HomeBody extends React.Component {
  render () {
    if (this.props.choice === 'about') {
      displayedComponent = <Intro />
    } else if (this.props.choice === 'projects') {
      displayedComponent = <Projects />
    } else {
      displayedComponent = <Work />
    }
    return (
      <div className="home-body">
        <div className="text-box">
          {displayedComponent}
        </div>
        <Social />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    choice: state.choice
  }
}

export default connect(mapStateToProps)(HomeBody)
