import React from 'react'

import Header from './Header'
import Footer from './Footer'
import HomeBody from './HomeBody'

class App extends React.Component {
  render () {
    return (
      <div className="app-container">
        <Header />
        <HomeBody />
        <Footer />
      </div>
    )
  }
}

export default App
