import React from "react"
import PropTypes from "prop-types"
import LayoutContainer from "../layouts/layout-container"
import Heading from "../components/heading"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
//import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (

    <LayoutContainer>
        <div>
            
            <div>
            <Heading color="color1">Todos los tags</Heading>
            <ul>
                {group?.map(tag => (
                <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <Heading color="color4">{tag.fieldValue} ({tag.totalCount})</Heading>
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        </div>
    </LayoutContainer>
  
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`