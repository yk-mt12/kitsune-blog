/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PostCard from "../components/post-card"

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)

  const categoryHeader = `${totalCount} post${totalCount === 1 ? "" : "s"
    } tagged with "${category}"`

  return (
    <Layout>
      <p><Link to="/category">All Category</Link></p>
      <h1>{categoryHeader}</h1>
      <div className="grids col-1 sm-2 lg-3">{posts}</div>
    </Layout>
  )
}


Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Category

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`
