import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'
import { Header } from './header/header'


import './css/style.css'
import './css/colors/green.css'

require ('jquery.mmenu');

class MainJS extends React.Component {

  
  componentDidMount(){

		 require ('./js/custom');   //agregando js de template de css

		 
  }


  render() {
    return (<div/>)
  }

}



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
        <div id="wrapper" className="wrapper">

          <Header siteTitle={data.site.siteMetadata.title}  />
        
				  <div className="clearfix" />
          <Location>
            {({ location }) => {
              return <IsIndex isIndx={location.pathname === '/'} />
						}}
				
						
          </Location>


          <MainJS/>

        </div>

        {children}
            
             





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
                <h3>UCSM - En la excelencia académica y profesional</h3>
                <span>Encuentra tus oportunidades</span>
              </div>
            </div>
          </div>
          {/* Search Bar */}
          <div className="row">
            <div className="col-md-12">
              <div className="intro-banner-search-form margin-top-95">
                {/* Search Field 
                <div className="intro-search-field with-autocomplete">
                  <label htmlFor="autocomplete-input" className="field-title ripple-effect">Donde?</label>
                  <div className="input-with-icon">
                    <input id="autocomplete-input" type="text" placeholder="Online Job" />
                    <i className="icon-material-outline-location-on" />
                  </div>
                </div>*/}
                {/* Search Field */}
                <div className="intro-search-field">
                  <label htmlFor="intro-keywords" className="field-title ripple-effect">Que tipo de trabajo estas buscando?</label>
                  <input id="intro-keywords" type="text" placeholder="Nombre del puesto o Palabras clave" />
                </div>
                {/* Button */}
                <div className="intro-search-button">
                  <button className="button ripple-effect" /*onClick="window.location.href='jobs-list-layout-1.html'"*/>Buscar</button>
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
                  <span>Ofertas Publicadas</span>
                </li>
                <li>
                  <strong className="counter">3,543</strong>
                  <span>Empresas</span>
                </li>
                <li>
                  <strong className="counter">1,232</strong>
                  <span>Alumnos Registrados</span>
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
