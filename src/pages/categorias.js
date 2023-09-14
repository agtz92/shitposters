import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Heading from "../components/heading"
import Layout from "../layouts/layout"
import InfoBlock from "../components/infoblock"
// Utilities
import kebabCase from "lodash/kebabCase"



  const imageMapper ={
  Celebridades: require("../images/slider/Celebridades.jpg"),
  Cine: require("../images/slider/Cine.jpg"),
  Deportes: require("../images/slider/Deportes.jpg"),
  Historia: require("../images/slider/Historia.jpg"),
  Musica: require("../images/slider/Musica.jpg"),
  Naturaleza: require("../images/slider/Naturaleza.jpg"),
  Random: require("../images/slider/Random.jpg"),
  Television: require("../images/slider/Television.jpg"),
  Gaming: require("../images/slider/Gaming.jpg"),
  Recomendaciones: require("../images/slider/Recomendaciones.jpg"),
}



const CategoriasPage = ({
  data: {
    allMarkdownRemark: { group},
    site: {
      siteMetadata: { title },
    },
  },
}) => (
        <Layout>
            
            
        <div>
            <div>
                <Heading color="#edf2f4" alignment="center">Categorías</Heading>
                <div className="divpadding">
                    {group.map(categoria => (
                        <ul key={categoria.fieldValue}>
                            <Link to={`/categorias/${kebabCase(categoria.fieldValue)}/`}>
                                <InfoBlock title={categoria.fieldValue} img={imageMapper[(categoria.fieldValue).split(' ').join('')]}  description={`Ve todos nuestros datos curiosos sobre ${categoria.fieldValue}`}/>
                            </Link>
                        </ul>
                        
                    ))}
                </div>
            </div>
        </div>
        </Layout>
    )

CategoriasPage.propTypes = {
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

export default CategoriasPage

export const pageQuery = graphql`
  query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___categoria) {
      fieldValue
    }
  }

}
`