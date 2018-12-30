import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux';


import { guesLinks, userLinks } from './loginlinks'

import { userActions } from '../../state/_actions';
import { alertActions } from '../../state/_actions';


import { activateGeod, closeGeod } from '../../state/_actions';

///images
import logo from '../../images/logo_ucsm.png'


class Header extends React.Component {
  constructor(props) {
    super(props);
    // console.dir(props)
  }

  render() {

    return (
      <header id="header-container" className="fullwidth">
 <ConnectedCounter />
        <div id="header">
          <div className="container">
            {/* Left Side Content */}
            <div className="left-side">
              {/* Logo */}
              <div id="logo">
                <Link to="/">
                  <img src={logo} data-sticky-logo="images/logo.png" data-transparent-logo="images/logo2.png" alt="logoBolsadeTrabajo" />
                </Link>
              </div>
              {/* Main Navigation */}
              <nav id="navigation">
                <ul id="responsive">
                  <li>
                    <Link to="/" className="current"> Inicio</Link>
                    {/* Main sub menu 
                    <ul className="dropdown-nav">
                      <li><a href="index.html">Home 1</a></li>
                      <li><a href="index-2.html">Home 2</a></li>
                      <li><a href="index-3.html">Home 3</a></li>
                    </ul>*/}
                  </li>
                  <li><a href="#">Find Work</a>
                    <ul className="dropdown-nav">
                      <li><a href="#">Browse Jobs</a>
                        <ul className="dropdown-nav">
                          <li><a href="jobs-list-layout-full-page-map.html">Full Page List + Map</a></li>
                          <li><a href="jobs-grid-layout-full-page-map.html">Full Page Grid + Map</a></li>
                          <li><a href="jobs-grid-layout-full-page.html">Full Page Grid</a></li>
                          <li><a href="jobs-list-layout-1.html">List Layout 1</a></li>
                          <li><a href="jobs-list-layout-2.html">List Layout 2</a></li>
                          <li><a href="jobs-grid-layout.html">Grid Layout</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Browse Tasks</a>
                        <ul className="dropdown-nav">
                          <li><a href="tasks-list-layout-1.html">List Layout 1</a></li>
                          <li><a href="tasks-list-layout-2.html">List Layout 2</a></li>
                          <li><a href="tasks-grid-layout.html">Grid Layout</a></li>
                          <li><a href="tasks-grid-layout-full-page.html">Full Page Grid</a></li>
                        </ul>
                      </li>
                      <li><a href="browse-companies.html">Browse Companies</a></li>
                      <li><a href="single-job-page.html">Job Page</a></li>
                      <li><a href="single-task-page.html">Task Page</a></li>
                      <li><a href="single-company-profile.html">Company Profile</a></li>
                    </ul>
                  </li>
                  <li><a href="#">For Employers</a>
                    <ul className="dropdown-nav">
                      <li><a href="#">Find a Freelancer</a>
                        <ul className="dropdown-nav">
                          <li><a href="freelancers-grid-layout-full-page.html">Full Page Grid</a></li>
                          <li><a href="freelancers-grid-layout.html">Grid Layout</a></li>
                          <li><a href="freelancers-list-layout-1.html">List Layout 1</a></li>
                          <li><a href="freelancers-list-layout-2.html">List Layout 2</a></li>
                        </ul>
                      </li>
                      <li><a href="single-freelancer-profile.html">Freelancer Profile</a></li>
                      <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                      <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dashboard</a>
                    <ul className="dropdown-nav">
                      <li><a href="dashboard.html">Dashboard</a></li>
                      <li><a href="dashboard-messages.html">Messages</a></li>
                      <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                      <li><a href="dashboard-reviews.html">Reviews</a></li>
                      <li><a href="dashboard-manage-jobs.html">Jobs</a>
                        <ul className="dropdown-nav">
                          <li><a href="dashboard-manage-jobs.html">Manage Jobs</a></li>
                          <li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
                          <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                        </ul>
                      </li>
                      <li><a href="dashboard-manage-tasks.html">Tasks</a>
                        <ul className="dropdown-nav">
                          <li><a href="dashboard-manage-tasks.html">Manage Tasks</a></li>
                          <li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
                          <li><a href="dashboard-my-active-bids.html">My Active Bids</a></li>
                          <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                        </ul>
                      </li>
                      <li><a href="dashboard-settings.html">Settings</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Pages</a>
                    <ul className="dropdown-nav">
                      <li><a href="pages-blog.html">Blog</a></li>
                      <li><a href="pages-pricing-plans.html">Pricing Plans</a></li>
                      <li><a href="pages-checkout-page.html">Checkout Page</a></li>
                      <li><a href="pages-invoice-template.html">Invoice Template</a></li>
                      <li><a href="pages-user-interface-elements.html">User Interface Elements</a></li>
                      <li><a href="pages-icons-cheatsheet.html">Icons Cheatsheet</a></li>
                      <li><a href="pages-login.html">Login &amp; Register</a></li>
                      <li><a href="pages-404.html">404 Page</a></li>
                      <li><a href="pages-contact.html">Contact</a></li>
                    </ul>
                  </li>
                  <li><Link to="/login" className="current"> login</Link>
                  </li>
                </ul>
              </nav>
              <div className="clearfix" />
              {/* Main Navigation / End */}
            </div>
            {/* Left Side Content / End */}
            {/* Right Side Content / End */}
            {/* isAuthenticated ? userLinks : guesLinks */}
                      {/* {this.props.geod.title ? (
                        <button onClick={this.props.closeGeod}>Exit Geod</button>
                      ) : (
                          <button
                            onClick={() =>
                              this.props.activateGeod({ title: 'I am a geo dude!' })
                            }
                          >
                            Click Me!
                    </button>
                        )} */}

            {/* Right Side Content / End */}
           
          </div>
        </div>
        {/* Header / End */}


      </header>


    )
  }
}

/*
Header.propTypes={
  auth: PropTypes.object.isRequired
 
}

function mapStateToProps(state){
  return{
    auth: state.auth
  }
}*/

//export default connect(mapStateToProps)(Header);
//export default Header;

// function mapStateToProps(state) {
//   const { users, authentication } = state;
//   const { user } = authentication;
//   return {
//       user,
//       users
//   };
// }

//  export default Header;

// const connectedHomePage = connect(mapStateToProps)(Header);
// export { connectedHomePage as default };




// // AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};


// const mapDispatchToProps = dispatch => {
//   return { increment: () => dispatch({ type: `INCREMENT` }) }
// }
// const mapStateToProps = ({ count }) => {
//   return { count }
// }



//const Counter = ({ count, increment }) => (
  class Counter extends React.Component {


    render() {
      return(
  <div>
    <h1>{this.props.geod.title || 'Hello World!'}</h1>

{this.props.geod.title ? (
  <button onClick={this.props.closeGeod}>Exit Geod</button>
) : (
    <button
      onClick={() =>
        this.props.activateGeod({ title: 'I am a geo dude!' })
      }
    >
      Click Me!
</button>
  )}
  </div>
)
}
  }

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)






//const mapStateToProps = state => ({
function mapStateToProps2(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
      user,
      users
  };
}
function mapStateToProps3(state) {
  const { alert } = state;
  
  return {
      alert
  };
}

function mapStateToProps4(state) {
  //  const { loggingIn } = state.authentication;
   const { loggingIn } = 1;
  console.dir(state)
   return {
       loggingIn
   };
}

const connectedHomePage = connect(mapStateToProps4)(Header);
export { connectedHomePage as Header };
export default connect(mapStateToProps3)(Header);
//export {Header};
//export default Header;
