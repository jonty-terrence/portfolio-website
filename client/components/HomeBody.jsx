import React from 'react'
import { connect } from 'react-redux'

import Social from './Social'
import Intro from './Intro'
import Work from './Work'

let displayedComponent = ''
let renderedComponent = ''
let shownClass = ''

class HomeBody extends React.Component {
  render () {
    if (this.props.choice === 'projects') {
      displayedComponent = <Work />
      renderedComponent = <div></div>
      shownClass = 'work-container'
    } else {
      displayedComponent = <Intro />
      renderedComponent = <Social />
      shownClass = 'text-box'
    }
    return (
      <div className="home-body">
        <div className={shownClass}>
          {displayedComponent}
        </div>
        {renderedComponent}
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
