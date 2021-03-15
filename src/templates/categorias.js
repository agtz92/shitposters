import React from "react"
import PropTypes from "prop-types"
import Layout from "../layouts/layout"
import Heading from "../components/heading"


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
                    const { dificultad } = node.frontmatter
                    const { featuredimage } = node.frontmatter
                    return (
                        <li key={slug}>
                            <Link to={slug}>
                                <Heading>{title}</Heading>
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
            
            <div style={{padding: "10px"}} className="parpost light">antesdelexamen es una página de internet gratuita con bancos de preguntas de examen para UNAM, IPN y todas las demás universidades más importantes de México. 
                    Tenemos bancos de preguntas por materia y por area. Bancos de preguntas Area 1, Bancos de preguntas Area 2, Bancos de preguntas area 3, Bancos de preguntas Area 4. Simulacros UNAM , IPN, 
                    UAM, UAEM. Guía UNAM 2021, Guía IPN 2021. <br></br>Agréganos en facebook buscando @antesdelexamen</div>
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