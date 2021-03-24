import React from "react"
import PropTypes from "prop-types"
import LayoutContainer from "../layouts/layout-container"
import Heading from "../components/heading"
import InfoBlock from "../components/infoblock"
// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } en "${tag}"`

  return (

    <LayoutContainer>
    <div>
      <Heading color="dark">{tagHeader}</Heading>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          const { featuredimage } = node.frontmatter
          const { short_description } = node.frontmatter
          const { tag } = pageContext
          return (
            <li key={slug}>
              <Link to={slug}>
                <InfoBlock title={title} img={featuredimage}  description={short_description} tags={tag}/>
              </Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags"><Heading color="color1">Todos los tags</Heading></Link>
    </div>
    </LayoutContainer>
    
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
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

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            featuredimage
            tags
            title
            categoria
            short_description
          }
        }
      }
    }
  }
`