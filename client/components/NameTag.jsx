import React from 'react'

class NameTag extends React.Component {
  render () {
    return (
      <div className="name-tag-container">
        <h1 className="name-heading"><a href="#" onClick={() => window.location.reload()}>Jonty Buchan</a></h1>
        <h2 className="job-title">Developer</h2>
      </div>
    )
  }
}

export default NameTag
