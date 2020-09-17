import React from 'react'

import ProPic from './ProPic'

class Intro extends React.Component {
  render () {
    return (
      <div className="intro-box">
        <p className="int-1">
            Hey there, I&apos;m a software developer <br></br>living and working
          in Auckland New Zealand<br></br> – thanks for dropping by.
        </p>
        <p className="int-2">
              I&apos;m currently seeking opportunities to work <br></br>with and learn from people creating software
              that has <br></br>a positive impact, and delivers information <br></br>and
              experiences in accessible ways
        </p>
        <p className="int-3">
              If you have a project that sounds <br></br>like this, please get in touch with me! <br></br>Feel free
              to check out my CV and work, too.
        </p>
        <ProPic />
      </div>
    )
  }
}

export default Intro
