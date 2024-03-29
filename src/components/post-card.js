/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import kebabCase from "lodash/kebabCase"

import { Tag } from "./tag"
import { Category} from "./category"

const PostCard = ({ data }) => (
  <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
    {data.frontmatter.featuredImage ? (
      <Link to={data.frontmatter.slug}>
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
        />
      </Link>
    ) : (
      ""
    )}
    <div className="post-content">
      <h2 className="title">
        <Link
          to={data.frontmatter.slug}
          sx={{
            variant: "links.postLink",
          }}
        >
          {data.frontmatter.title}
        </Link>
      </h2>
      <p
        className="meta"
        sx={{
          color: "muted",
        }}
      >
        <time>{data.frontmatter.date}</time>
      </p>
      <p>
        <Link to={`/category/${kebabCase(data?.frontmatter.category)}/`}>
          <Category category={data?.frontmatter.category} />
        </Link>
      </p>
      {data?.frontmatter.tags?.map(tag => {
        return (
          <Link to={`/tags/${kebabCase(tag)}/`}>
            <Tag tag={tag} />
          </Link>
        )
      })}
    </div>
  </article>
)

export default PostCard
