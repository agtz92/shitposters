import React from "react"
import PropTypes from "prop-types"
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import InfoBlock from "../components/infoblock"


// Components
import { Link, graphql } from "gatsby"

const Categorias = ({ pageContext, data }) => {
    const { categoria } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const categoriaHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } en "${categoria}"`

    return (
      <React.Fragment>
        <Layout>
            <div>
            <Heading>{categoriaHeader}</Heading>
            
            <ul className="list-posts">
                {edges.map(({ node }) => {
                    const { slug } = node.fields
                    const { title } = node.frontmatter
                    const { short_description } = node.frontmatter
                    const { featuredimage } = node.frontmatter
                    const { tags }=node.frontmatter
                    return (
                        <li key={slug}>
                            <Link to={slug}>
                                <InfoBlock title={title} img={featuredimage}  description={short_description} tags={tags.map((tag)=>[tag])}/>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */} 
             <Heading color="dark" alignment="center">Te podría interesar</Heading>
             
            
            <div style={{padding: "10px"}} className="parpost light">10datos.com es una página informativa que recopila información de
            muchas fuentes de información. No poseemos los derechos de ninguna imagen ni contenido presentada en el sitio web.</div>
            <Link to="/categorias" ><div className="div-tag marginbottom">Ve todas las categorias</div></Link>
        </div>
        </Layout>
        </React.Fragment>
    )
}

Categorias.propTypes = {
    pageContext: PropTypes.shape({
        categoria: PropTypes.string.isRequired,
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

export default Categorias

export const pageQuery = graphql`
  query($categoria: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categoria: { in: [$categoria] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            featuredimage
            tags
            title
            categoria
            short_description
          }
          fields{
            slug
          }
        }
      }
    }
  }
`

/*{
                    childImageSharp {
                      fluid(maxWidth: 1024) {
                        ...GatsbyImageSharpFluid
                      }
                    }
}*/ 