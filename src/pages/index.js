import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import Featured_jobs from '../components/featured_jobs'
import Footer from '../components/footer'


//import openRightMenu from '../components/assets/js/customBT'
//import closeRightMenu from '../components/assets/js/customBT'

const IndexPage = () => (
  <Layout>
<Featured_jobs/>
  

    <Link to="/page-2/">Go to page xd</Link>
    
    
<Footer/>
		

  </Layout>
  
)

//var $= require('../components/assets/jquery.min.js')

export default IndexPage
