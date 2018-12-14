import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
//import './layout.scss'
import './main.scss'
import './style-green.scss'
import './css/plugins.css'




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
          <div className="wrapper">
            <Header siteTitle={data.site.siteMetadata.title} />
          </div>
          <h1>Hi peopl2e</h1>
        

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




Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
