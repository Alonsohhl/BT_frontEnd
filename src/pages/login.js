import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Footer from '../components/footer'

const LoginPage = () => (
    <Layout>
        <div>
        {/* Titlebar
================================================== */}
        <div id="titlebar" className="gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Log In</h2>
                {/* Breadcrumbs */}
                <nav id="breadcrumbs" className="dark">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li>Log In</li>
                  </ul>
                </nav>
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
                  <h3>We're glad to see you again!</h3>
                  <span>Don't have an account? <a href="pages-register.html">Sign Up!</a></span>
                </div>
                {/* Form */}
                <form method="post" id="login-form">
                  <div className="input-with-icon-left">
                    <i className="icon-material-baseline-mail-outline" />
                    <input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required />
                  </div>
                  <div className="input-with-icon-left">
                    <i className="icon-material-outline-lock" />
                    <input type="password" className="input-text with-border" name="password" id="password" placeholder="Password" required />
                  </div>
                  <a href="#" className="forgot-password">Forgot Password?</a>
                </form>
                {/* Button */}
                <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Log In <i className="icon-material-outline-arrow-right-alt" /></button>
                {/* Social Login */}
                <div className="social-login-separator"><span>or</span></div>
                <div className="social-login-buttons">
                  <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f" /> Log In via Facebook</button>
                  <button className="google-login ripple-effect"><i className="icon-brand-google-plus-g" /> Log In via Google+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-top-70" />
      
      
  <Footer/>
          
  
    </Layout>
    
  )

export default LoginPage
