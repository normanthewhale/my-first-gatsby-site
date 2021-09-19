import * as React from 'react'
import Layout from '../components/layout/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial. Hey Jared.</p>
      <StaticImage
        alt="Gatsby logo"
        src="../images/icon.png"
      />
    </Layout>
  )
}

export default IndexPage