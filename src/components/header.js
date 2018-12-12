import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header =({ siteTitle}) => (

<div className="banner home-5" style={{backgroundImage: 'url(../img/6604.jpg)'}}>  
<div className="container">
            <div className="banner-caption">
              <div className="col-md-12 col-sm-12 banner-text">
                <h1>7,000+ Browse Jobs</h1>
                <form className="form-horizontal">
                  <div className="col-md-4 no-padd">
                    <div className="input-group">
                      <input type="text" className="form-control right-bor" placeholder="Skills, Designations, Companies" />
                    </div>
                  </div>
                  <div className="col-md-3 no-padd">
                    <div className="input-group">
                      <input type="text" className="form-control right-bor" placeholder="Search By Location.." />
                    </div>
                  </div>
                  <div className="col-md-3 no-padd">
                    <div className="input-group">
                      <select id="choose-city" className="form-control">
                        <option>Choose City</option>
                        <option>Chandigarh</option>
                        <option>London</option>
                        <option>England</option>
                        <option>Pratapcity</option>
                        <option>Ukrain</option>
                        <option>Wilangana</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 no-padd">
                    <div className="input-group">
                      <button type="submit" className="btn btn-primary">Search Job</button>
                    </div>
                  </div>
                </form>
                <div className="video-box">
                  <a href="#" className="btn btn-video"><i className="fa fa-play" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        

)
/*
const Header = ({ siteTitle }) => (

  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >

    

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}
*/
export default Header
