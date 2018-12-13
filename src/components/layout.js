import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.scss'
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
            { name: 'keywords', content: 'Bolsa de Empleo,Trabajo,Bolsa de Trabajo, UCSM' },
          ]}
        >
          <html lang="es" />
        </Helmet>

        <div>
          <div className="Loader" />
          <div className="wrapper">


            <Header siteTitle={data.site.siteMetadata.title} />
          </div></div>

          
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}

      
        </div>
        
      </>
    )}
  />
)




Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
