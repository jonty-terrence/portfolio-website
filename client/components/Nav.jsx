import React from 'react'
import { connect } from 'react-redux'

import Pdf from '../../server/public/jonty-cv-2020.pdf'
import { menuOption } from '../actions'

function handleClick (choice, dispatch) {
  console.log(choice)
  dispatch(menuOption(choice))
}

class Nav extends React.Component {
  render () {
    return (
      <>
        <nav className="nav-bar">
          <a href="#"onClick={e => handleClick('projects', this.props.dispatch)}>Projects,</a>
          <a href={Pdf} target="_blank" rel='noopener noreferrer'>Resume,</a>
        </nav>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    choice: state.choice
  }
}

export default connect(mapStateToProps)(Nav)
