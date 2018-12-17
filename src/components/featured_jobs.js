import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const featured_jobs =( ) => (
//{/* Features Jobs */}
<div className="section padding-top-65 padding-bottom-75">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        {/* Section Headline */}
        <div className="section-headline margin-top-0 margin-bottom-35">
          <h3>Recent Jobs</h3>
          <a href="jobs-list-layout-full-page-map.html" className="headline-link">Browse All Jobs</a>
        </div>
        {/* Jobs Container */}
        <div className="listings-container compact-list-layout margin-top-35">
          {/* Job Listing */}
          <a href="single-job-page.html" className="job-listing with-apply-button">
            {/* Job Listing Details */}
            <div className="job-listing-details">
              {/* Logo */}
              <div className="job-listing-company-logo">
                <img src="images/company-logo-01.png" alt ="Logo_UCSM"/>
              </div>
              {/* Details */}
              <div className="job-listing-description">
                <h3 className="job-listing-title">Bilingual Event Support Specialist</h3>
                {/* Job Listing Footer */}
                <div className="job-listing-footer">
                  <ul>
                    <li><i className="icon-material-outline-business" /> Hexagon <div className="verified-badge" title="Verified Employer" data-tippy-placement="top" /></li>
                    <li><i className="icon-material-outline-location-on" /> San Francissco</li>
                    <li><i className="icon-material-outline-business-center" /> Full Time</li>
                    <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                  </ul>
                </div>
              </div>
              {/* Apply Button */}
              <span className="list-apply-button ripple-effect">Apply Now</span>
            </div>
          </a>	
          {/* Job Listing */}
          <a href="single-job-page.html" className="job-listing with-apply-button">
            {/* Job Listing Details */}
            <div className="job-listing-details">
              {/* Logo */}
              <div className="job-listing-company-logo">
                <img src="images/company-logo-05.png" alt ="Logo_UCSM" />
              </div>
              {/* Details */}
              <div className="job-listing-description">
                <h3 className="job-listing-title">Competition Law Officer</h3>
                {/* Job Listing Footer */}
                <div className="job-listing-footer">
                  <ul>
                    <li><i className="icon-material-outline-business" /> Laxo</li>
                    <li><i className="icon-material-outline-location-on" /> San Francissco</li>
                    <li><i className="icon-material-outline-business-center" /> Full Time</li>
                    <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                  </ul>
                </div>
              </div>
              {/* Apply Button */}
              <span className="list-apply-button ripple-effect">Apply Now</span>
            </div>
          </a>
          {/* Job Listing */}
          <a href="single-job-page.html" className="job-listing with-apply-button">
            {/* Job Listing Details */}
            <div className="job-listing-details">
              {/* Logo */}
              <div className="job-listing-company-logo">
                <img src="images/company-logo-02.png" alt ="Logo_UCSM" />
              </div>
              {/* Details */}
              <div className="job-listing-description">
                <h3 className="job-listing-title">Barista and Cashier</h3>
                {/* Job Listing Footer */}
                <div className="job-listing-footer">
                  <ul>
                    <li><i className="icon-material-outline-business" /> Coffee</li>
                    <li><i className="icon-material-outline-location-on" /> San Francissco</li>
                    <li><i className="icon-material-outline-business-center" /> Full Time</li>
                    <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                  </ul>
                </div>
              </div>
              {/* Apply Button */}
              <span className="list-apply-button ripple-effect">Apply Now</span>
            </div>
          </a>
          {/* Job Listing */}
          <a href="single-job-page.html" className="job-listing with-apply-button">
            {/* Job Listing Details */}
            <div className="job-listing-details">
              {/* Logo */}
              <div className="job-listing-company-logo">
                <img src="images/company-logo-03.png" alt ="Logo_UCSM" />
              </div>
              {/* Details */}
              <div className="job-listing-description">
                <h3 className="job-listing-title">Restaurant General Manager</h3>
                {/* Job Listing Footer */}
                <div className="job-listing-footer">
                  <ul>
                    <li><i className="icon-material-outline-business" /> King <div className="verified-badge" title="Verified Employer" data-tippy-placement="top" /></li>
                    <li><i className="icon-material-outline-location-on" /> San Francissco</li>
                    <li><i className="icon-material-outline-business-center" /> Full Time</li>
                    <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                  </ul>
                </div>
              </div>
              {/* Apply Button */}
              <span className="list-apply-button ripple-effect">Apply Now</span>
            </div>
          </a>
          {/* Job Listing */}
          <a href="single-job-page.html" className="job-listing with-apply-button">
            {/* Job Listing Details */}
            <div className="job-listing-details">
              {/* Logo */}
              <div className="job-listing-company-logo">
                <img src="images/company-logo-05.png" alt ="Logo_UCSM" />
              </div>
              {/* Details */}
              <div className="job-listing-description">
                <h3 className="job-listing-title">International Marketing Coordinator</h3>
                {/* Job Listing Footer */}
                <div className="job-listing-footer">
                  <ul>
                    <li><i className="icon-material-outline-business" /> Skyist</li>
                    <li><i className="icon-material-outline-location-on" /> San Francissco</li>
                    <li><i className="icon-material-outline-business-center" /> Full Time</li>
                    <li><i className="icon-material-outline-access-time" /> 2 days ago</li>
                  </ul>
                </div>
              </div>
              {/* Apply Button */}
              <span className="list-apply-button ripple-effect">Apply Now</span>
            </div>
          </a>
        </div>
        {/* Jobs Container / End */}
      </div>
    </div>
  </div>
</div>
//{/* Featured Jobs / End */}
);

export default featured_jobs