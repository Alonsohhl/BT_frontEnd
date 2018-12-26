import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Footer from '../components/footer'


//http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
const LoginPage = () => (
    <Layout>
        <div>
        {/* Titlebar
================================================== */}
        <div id="titlebar" className="gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Login</h2>
                {/* Breadcrumbs */}
                
              </div>
            </div>
          </div>
        </div>
        {/* Page Content
================================================== */}
        <div className="container">
          <div className="row">
            <div className="col-xl-5 offset-xl-3">
              <div className="login-register-page">
                {/* Welcome Text */}
                <div className="welcome-text">
                  <h3>Acceder</h3>
                  <span>¿No tienes una cuenta? 
                  <Link to="/registro" className="current"> Registrate!</Link>
                    </span>
                </div>
                {/* Form */}
                <form method="post" id="login-form">
                  <div className="input-with-icon-left">
                    <i className="icon-material-baseline-mail-outline" />
                    <input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Correo electrónico" required />
                  </div>
                  <div className="input-with-icon-left">
                    <i className="icon-material-outline-lock" />
                    <input type="password" className="input-text with-border" name="password" id="password" placeholder="Contraseña" required />
                  </div>
                  <a href="#" className="forgot-password">¿Olvidaste la contraseña?</a>
                </form>
                {/* Button */}
                <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Acceder <i className="icon-material-outline-arrow-right-alt" /></button>
                {/* Social Login
                <div className="social-login-separator"><span>or</span></div>
                <div className="social-login-buttons">
                  <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f" /> Log In via Facebook</button>
                  <button className="google-login ripple-effect"><i className="icon-brand-google-plus-g" /> Log In via Google+</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-top-200"/>
        
      
      
  <Footer/>
          
  
    </Layout>
    
  )

export default LoginPage
