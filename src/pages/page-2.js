import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'


import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = ({ location }) => (
  <Layout>
    <SEO title="Page two" />
    <div style={{height: '100vh', paddingTop: '200px'}}>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 {location.pathname}</p>
    <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
