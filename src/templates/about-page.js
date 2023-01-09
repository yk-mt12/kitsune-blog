import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ShareSns } from "../components/share-sns"

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <div>
          {typeof window !== 'undefined' && window.location.href &&
            <ShareSns articleUrl={window.location.href} articleTitle={frontmatter.title} />
          }
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
