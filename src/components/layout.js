import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'

import Header from './header'


import './css/style.css'
import './css/colors/green.css'



const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet

          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Bolsa de Trabajo UCSM' },
            { name: 'keywords', content: 'Bolsa de Empleo' },
          ]}
        >
          <html lang="es" />
        </Helmet>

        <div className="Loader"></div>
        <div id="wrapper" className="wrapper-with-transparent-header">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="clearfix" />



          <Location>
            {({ location }) => {


              return <IsIndex isIndx={location.pathname === '/'} />
            }}
          </Location>

        </div>

        {children}
            
        


        <script type="text/javascript" src="./assets/js/jquery.min.js"></script>
        <script type="text/javascript" src="./assets/js/viewportchecker.js"></script>
        <script type="text/javascript" src="./assets/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="./assets/js/bootsnav.js"></script>
        <script type="text/javascript" src="./assets/js/select2.min.js"></script>
        <script type="text/javascript" src="./assets/js/wysihtml5-0.3.0.js"></script>
        <script type="text/javascript" src="./assets/js/bootstrap-wysihtml5.js"></script>
        <script type="text/javascript" src="./assets/js/datedropper.min.js"></script>
        <script type="text/javascript" src="./assets/js/dropzone.js"></script>
        <script type="text/javascript" src="./assets/js/loader.js"></script>
        <script type="text/javascript" src="./assets/js/owl.carousel.min.js"></script>
        <script type="text/javascript" src="./assets/js/slick.min.js"></script>
        <script type="text/javascript" src="./assets/js/gmap3.min.js"></script>

        <script src="./assets/js/custom.js"></script>




      </>
    )}

  />

)



function IsIndex(props) {
  const isIndx = props.isIndx;


  if (isIndx) {
    return (

      <div className="intro-banner dark-overlay big-padding">
        {/* Transparent Header Spacer */}
        <div className="transparent-header-spacer" />
        <div className="container">
          {/* Intro Headline */}
          <div className="row">
            <div className="col-md-12">
              <div className="banner-headline-alt">
                <h3>Don't Just Dream, Do</h3>
                <span>Find the best jobs in the digital industry</span>
              </div>
            </div>
          </div>
          {/* Search Bar */}
          <div className="row">
            <div className="col-md-12">
              <div className="intro-banner-search-form margin-top-95">
                {/* Search Field */}
                <div className="intro-search-field with-autocomplete">
                  <label htmlFor="autocomplete-input" className="field-title ripple-effect">Where?</label>
                  <div className="input-with-icon">
                    <input id="autocomplete-input" type="text" placeholder="Online Job" />
                    <i className="icon-material-outline-location-on" />
                  </div>
                </div>
                {/* Search Field */}
                <div className="intro-search-field">
                  <label htmlFor="intro-keywords" className="field-title ripple-effect">What job you want?</label>
                  <input id="intro-keywords" type="text" placeholder="Job Title or Keywords" />
                </div>
                {/* Button */}
                <div className="intro-search-button">
                  <button className="button ripple-effect" onclick="window.location.href='jobs-list-layout-1.html'">Search</button>
                </div>
              </div>
            </div>
          </div>
          {/* Stats */}
          <div className="row">
            <div className="col-md-12">
              <ul className="intro-stats margin-top-45 hide-under-992px">
                <li>
                  <strong className="counter">1,586</strong>
                  <span>Jobs Posted</span>
                </li>
                <li>
                  <strong className="counter">3,543</strong>
                  <span>Tasks Posted</span>
                </li>
                <li>
                  <strong className="counter">1,232</strong>
                  <span>Freelancers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Video Container */}
        <div className="video-container" data-background-image="images/home-video-background-poster.jpg">
          <video loop autoPlay muted>
            <source src="images/home-video-background.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    )
  }
  return null;
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
