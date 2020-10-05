import React from 'react'

import eBook from '../../server/public/airbnb-e-book.pdf'
import details from '../../client/details/workDetails'

class Work extends React.Component {
  render () {
    return (
      <div className="wrapper">
        {details.map(detail => {
          return (
            <div className="box" key={detail.id}>
              <div className="content">
                <p className="work-title">
                  {detail.projectTitle} <br></br>
                  <span className="details"><a href={detail.url} target="_blank" rel='noopener noreferrer'>Details</a></span>
                </p>
                <p className="work-details">
                  {detail.projectType}<br></br>
                  {detail.year}
                </p>
              </div>
            </div>
          )
        })}
        <div className="box" key='6'>
          <div className="content">
            <p className="work-title">
            Content Sample <br></br>
              <span className="details"><a href={eBook} target="_blank" rel='noopener noreferrer'>Details</a></span>
            </p>
            <p className="work-details">
            Solo Project<br></br>
              2020
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
