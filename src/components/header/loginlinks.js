
import React from 'react'
import HeaderNavUser from './headernavuser'

import { Link } from 'gatsby'

export const guesLinks = (
    <div>
      
   
  
  <div className="right-side">
  
    <div className="header-widget" >
    <div className="header-notifications-outer">
          <div className="header-notifications-middle">
          <div className="header-notifications-innertext">
            <Link to="/login" className=""> login</Link>
          </div>
          </div>
        </div>

      
    </div>
    {/* Mobile Navigation Button */}
    <span className="mmenu-trigger">
      <button className="hamburger hamburger--collapse" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </span>
  </div>
  </div>
);

export const userLinks=(<div className="right-side">
{/*  User Notifications */}
<div className="header-widget hide-on-mobile">
  {/* Notifications */}
  <div className="header-notifications">
    {/* Trigger */}
    <div className="header-notifications-trigger">
      <a href="#"><i className="icon-feather-bell" /><span>4</span></a>
    </div>
    {/* Dropdown */}
    <div className="header-notifications-dropdown">
      <div className="header-notifications-headline">
        <h4>Notifications</h4>
        <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
          <i className="icon-feather-check-square" />
        </button>
      </div>
      <div className="header-notifications-content">
        <div className="header-notifications-scroll" data-simplebar>
          <ul>
            {/* Notification */}
            <li className="notifications-not-read">
              <a href="dashboard-manage-candidates.html">
                <span className="notification-icon"><i className="icon-material-outline-group" /></span>
                <span className="notification-text">
                  <strong>Michael Shannah</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                </span>
              </a>
            </li>
            {/* Notification */}
            <li>
              <a href="dashboard-manage-bidders.html">
                <span className="notification-icon"><i className=" icon-material-outline-gavel" /></span>
                <span className="notification-text">
                  <strong>Gilbert Allanis</strong> placed a bid on your <span className="color">iOS App Development</span> project
                </span>
              </a>
            </li>
            {/* Notification */}
            <li>
              <a href="dashboard-manage-jobs.html">
                <span className="notification-icon"><i className="icon-material-outline-autorenew" /></span>
                <span className="notification-text">
                  Your job listing <span className="color">Full Stack PHP Developer</span> is expiring.
                </span>
              </a>
            </li>
            {/* Notification */}
            <li>
              <a href="dashboard-manage-candidates.html">
                <span className="notification-icon"><i className="icon-material-outline-group" /></span>
                <span className="notification-text">
                  <strong>Sindy Forrest</strong> applied for a job <span className="color">Full Stack Software Engineer</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Messages */}
  <div className="header-notifications">
    <div className="header-notifications-trigger">
      <a href="#"><i className="icon-feather-mail" /><span>3</span></a>
    </div>
    {/* Dropdown */}
    <div className="header-notifications-dropdown">
      <div className="header-notifications-headline">
        <h4>Messages</h4>
        <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
          <i className="icon-feather-check-square" />
        </button>
      </div>
      <div className="header-notifications-content">
        <div className="header-notifications-scroll" data-simplebar>
          <ul>
            {/* Notification */}
            <li className="notifications-not-read">
              <a href="dashboard-messages.html">
                <span className="notification-avatar status-online"><img src="images/user-avatar-small-03.jpg"  /></span>
                <div className="notification-text">
                  <strong>David Peterson</strong>
                  <p className="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
                  <span className="color">4 hours ago</span>
                </div>
              </a>
            </li>
            {/* Notification */}
            <li className="notifications-not-read">
              <a href="dashboard-messages.html">
                <span className="notification-avatar status-offline"><img src="images/user-avatar-small-02.jpg"  /></span>
                <div className="notification-text">
                  <strong>Sindy Forest</strong>
                  <p className="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually on vacation until...</p>
                  <span className="color">Yesterday</span>
                </div>
              </a>
            </li>
            {/* Notification */}
            <li className="notifications-not-read">
              <a href="dashboard-messages.html">
                <span className="notification-avatar status-online"><img src="images/user-avatar-placeholder.png" /></span>
                <div className="notification-text">
                  <strong>Marcin Kowalski</strong>
                  <p className="notification-msg-text">I received payment. Thanks for cooperation!</p>
                  <span className="color">Yesterday</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a href="dashboard-messages.html" className="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i className="icon-material-outline-arrow-right-alt" /></a>
    </div>
  </div>
</div>
{/*  User Notifications / End */}
{/* User Menu */}
<div className="header-widget">


  {/*  agregar el componente FIX*/}
  <HeaderNavUser/>
  
</div>
{/* User Menu / End */}
{/* Mobile Navigation Button */}
<span className="mmenu-trigger">
  <button className="hamburger hamburger--collapse" type="button">
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </button>
</span>
</div>);
