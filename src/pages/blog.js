import * as React from 'react'
import Layout from '../components/layout/layout'
import {  graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
