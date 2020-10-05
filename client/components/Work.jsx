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
                  <span className="details"><a href={detail.url}>Details</a></span>
                </p>
                <p className="work-details">
                  {detail.projectType}<br></br>
                  {detail.year}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Work
