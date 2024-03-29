import * as React from 'react'
import Layout from '../components/layout/comp'
import {  Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                      <article key={node.id}>
                        <h2>
                          <Link to={`/blog/${node.slug}`}>
                            {node.frontmatter.title}
                          </Link>  
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                      </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        body
        slug
      }
    }
  }
`

export default BlogPage
