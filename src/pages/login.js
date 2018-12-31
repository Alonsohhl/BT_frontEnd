import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Footer from '../components/footer'


import { userActions } from '../state/_actions';
import { connect } from 'react-redux';

//http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
//const LoginPage = () => (
class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }


  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    
    return (

      <Layout>
        <div>
          {/* Titlebar================================================== */}
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
          {/* Page Content================================================== */}
          <div className="container">
            <div className="row">
              <div className="col-xl-5 offset-xl-3">
                <div className="login-register-page">
                  {/* Welcome Text */}
                  <div className="welcome-text">
                    <h3>Acceder</h3>
                    <span>¿No tienes una cuenta?
                  <Link to="/registro/" className="current"> Registrate!</Link>
                    </span>
                  </div>
                  {/* Form */}
                  <form /*method="post"*/ id="login-form" onSubmit={this.handleSubmit}>
                    <div className="input-with-icon-left">
                      <i className="icon-material-baseline-mail-outline" />
                      <input type="text" className="input-text with-border" /*name="emailaddress"*/ id="emailaddress" placeholder="Correo electrónico" name="username" value={username} onChange={this.handleChange} required />
                    </div>
                    <div className="input-with-icon-left">
                      <i className="icon-material-outline-lock" />
                      <input type="password" className="input-text with-border" name="password" id="password" placeholder="Contraseña" value={password} onChange={this.handleChange} required />
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

        <div className="margin-top-200" />



        <Footer />


      </Layout>
    )
  }
}//)


function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  console.dir(state);
  return {
    loggingIn
  };
}

// const connectedHomePage = connect(mapStateToProps)(LoginPage);
// export { connectedHomePage as Header };
export default connect(mapStateToProps)(LoginPage);

// export default LoginPage
