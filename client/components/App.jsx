import React from 'react'

import Header from './Header'
import Footer from './Footer'
import HomeBody from './HomeBody'

class App extends React.Component {
  render () {
    return (
      <div className="page-container">
      <div className="app-container">
        <Header />
        <HomeBody />
      </div>
      <Footer />
      </div>
    )
  }
}

export default App
