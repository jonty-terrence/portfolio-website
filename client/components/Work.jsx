import React from 'react'

import eBook from '../../server/public/airbnb-e-book.pdf'

class Work extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <div className="box box-1">
          <div className="content">
            <p className="work-title">
              rtmr <br></br>
              <span className="details"><a href="https://github.com/jonty-terrence/rtmr">Details</a></span>
            </p>
            <p className="work-details">
              Solo Project <br></br>
              2020
            </p>
          </div>
        </div>

        <div className="box box-2">
          <div className="content">
            <p className="work-title">
              Kiwi Roadies <br></br>
              <span className="details"><a href="https://github.com/jonty-terrence/Kiwi-Roadies">Details</a></span>
            </p>
            <p className="work-details">
            Group Project <br></br>
            2020
            </p>
          </div>
        </div>

        <div className="box box-3">
          <div className="content">
            <p className="work-title">
              Meta Data Checker <br></br>
              <span className="details"><a href="https://github.com/jonty-terrence/meta-data-checker">Details</a></span>
            </p>
            <p className="work-details">
            Solo Project <br></br>
              2020
            </p>
          </div>
        </div>
        <div className="box box-4">
          <div className="content">
            <p className="work-title">
            Personal Website <br></br>
              <span className="details"><a href="https://github.com/jonty-terrence/portfolio-website">Details</a></span>
            </p>
            <p className="work-details">
            Solo Project <br></br>
              2020
            </p>
          </div>
        </div>

        <div className="box box-5">
          <div className="content">
            <p className="work-title">
              Landing Page Design and Content Creation <br></br>
              <span className="details"><a href="https://www2.thewebco.co.nz/seo-plans">Details</a></span>
            </p>
            <p className="work-details">
            Solo Project <br></br>
              2019
            </p>
          </div>
        </div>

        <div className="box box-6">
          <div className="content">
            <p className="work-title">
              Content Sample <br></br>
              <span className="details"><a href={eBook} target="_blank" rel='noopener noreferrer'>Details</a></span>
            </p>
            <p className="work-details">
            Solo Project <br></br>
              2019
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
