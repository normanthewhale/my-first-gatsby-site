import * as React from 'react'
import Layout from '../components/layout/comp'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Gatsby logo"
        src="../images/pup.jpg"
      />
    </Layout>
  )
}

export default IndexPage