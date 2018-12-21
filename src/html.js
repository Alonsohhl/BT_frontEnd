import React from "react"
import PropTypes from "prop-types"


//import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';

class Custitom extends React.Component {


render(){
  return <div/>;
  
  
}
}

export default class HTML extends React.Component {

  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />


          
          

          {this.props.postBodyComponents}

          <script src="js/jquery-3.3.1.min.js"></script>
          <script src="js/jquery-migrate-3.0.0.min.js"></script>

          <Custitom/>
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
