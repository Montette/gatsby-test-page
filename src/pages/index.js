import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Typography from 'typography'
import { Location } from '@reach/router'
import Subtitle from '../components/subtitle';

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div>
    <h1>Richard Hamming on Luck</h1>
    <div style={{height: '100vh', paddingTop: '200px'}}>
      <p>
        From Richard Hamming’s classic and must-read talk, “
        <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          You and Your Research
        </a>
        ”.
      </p>
  <Subtitle>
    Hello my friends
  </Subtitle>
      <blockquote>
        <p>
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.{" "}
          <em>
            The particular thing you do is luck, but that you do something is
            not.
           
          </em>
        </p>
      </blockquote>
   
    </div>
    <p>Posted April 09, 2011</p>
  </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about/">Go to about</Link>

  </Layout>
)

export default IndexPage
