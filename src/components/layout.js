import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'

import Header from './header'




//import $ from '.js/jquery-3.3.1.min'

import './css/style.css'
import './css/colors/green.css'
import $ from 'jquery'


class Custitom2 extends React.Component {


componentDidMount(){
  

  

  /*----------------------------------------------------*/
	/*  Notifications Boxes
	/*----------------------------------------------------*/
	$("a.close").removeAttr("href").on('click', function(){
		function slideFade(elem) {
			var fadeOut = { opacity: 0, transition: 'opacity 0.5s' };
			elem.css(fadeOut).slideUp();
		}
		slideFade($(this).parent());
	});

  /*--------------------------------------------------*/
	/*  Notification Dropdowns
	/*--------------------------------------------------*/
	$(".header-notifications").each(function() {
		var userMenu = $(this);
		var userMenuTrigger = $(this).find('.header-notifications-trigger a');

		$(userMenuTrigger).on('click', function(event) {
			event.preventDefault();

			if ( $(this).closest(".header-notifications").is(".active") ) {
	            close_user_dropdown();
	        } else {
	            close_user_dropdown();
	            userMenu.addClass('active');
	        }
		});
	});



  // Closing function
  function close_user_dropdown() {
		$('.header-notifications').removeClass("active");
    }

  // Closes notification dropdown on click outside the conatainer
	var mouse_is_inside = false;

	$( ".header-notifications" ).on( "mouseenter", function() {
	  mouse_is_inside=true;
	});
	$( ".header-notifications" ).on( "mouseleave", function() {
	  mouse_is_inside=false;
  });
  
  $("body").mouseup(function(){
    if(! mouse_is_inside) close_user_dropdown();
});

}

render(){
  return <div/>;
  
  
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
            
            
             



              <Custitom2/>

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
                  <button className="button ripple-effect" /*onClick="window.location.href='jobs-list-layout-1.html'"*/>Search</button>
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
