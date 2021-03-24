import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import PostBlockLarge from "../components/postBlockLarge"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import logo from "../images/logo_small.png"

export default function Home({ data }) {
  return (
    <React.Fragment>
      <Helmet >
                <meta charSet="utf-8" />
                <title>"10datos que no sabías | Promociónate con nosotros!"</title>
                <meta name="description" content="10datos.com promoción, entretenimiento y propagación de información de último minuto"/>
                <script type="application/ld+json">
                  {`
                {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id":"www.10datos.com"
                  },
                  "headline": "10 Datos",
                  "description": "10datos.com promoción, entretenimiento y propagación de información de último minuto",
                  "image": "https://www.10datos.com/assets/logo_small.png",  
                  "author": {
                    "@type": "Organization",
                    "name": "10datos.com"
                  },  
                  "publisher": {
                    "@type": "Organization",
                    "name": "10datos",
                    "logo": {
                      "@type": "ImageObject",
                      "url": \"https://www.10datos.com/${logo}\"
                    }
                  },
                  "datePublished": "Jan 2021",
                  "dateModified": "Apr 2021"
                }
                `}
                </script>
    </Helmet>
      <Layout>
        <Heading color="color1" alignment="center">10 cosas que no sabías</Heading>
              
            <div className="grid-layout">
              <div className="gridsection">
                
                {data.item1.edges.map(({ node }) => (
                    
                    <Link id="w-node-_530590b4-77ef-e9bc-deb9-6f651d7f57c9-c67b1059" to={node.fields.slug} className="divgrid w-inline-block">
                      <img srcSet={node.frontmatter.featuredimage} loading="lazy" alt="" className="imagegrid"/>
                      <div className="gridcontent">
                        <div className="categblock">
                          <div className="div-tag">{node.frontmatter.categoria}</div>
                        </div>
                        <Heading color="color1" alignment="left">{node.frontmatter.title}</Heading>
                        <div className="autdate">
                          <div className="autor">Fecha</div>
                          <div className="fecha">{node.frontmatter.date}</div>
                        </div>
                      </div>
                    </Link>
                    
                ))}

                {data.item2.edges.map(({ node }) => (
                    
                    <Link id="w-node-_33bb8955-93ca-ed05-9390-0e5382ecacb1-c67b1059" to={node.fields.slug} class="divgrid w-inline-block">
                      <img srcSet={node.frontmatter.featuredimage} loading="lazy" alt="" className="imagegrid"/>
                      <div className="gridcontent">
                        <div className="categblock">
                          <div className="div-tag">{node.frontmatter.categoria}</div>
                        </div>
                        <Heading color="color1" alignment="left">{node.frontmatter.title}</Heading>
                        <div className="autdate">
                          <div className="autor">Fecha</div>
                          <div className="fecha">{node.frontmatter.date}</div>
                        </div>
                      </div>
                    </Link>
                    
                ))}

                {data.item3.edges.map(({ node }) => (
                    <Link id="w-node-ac80eb26-6fab-fea2-291b-b206073a141c-c67b1059" to={node.fields.slug} class="divgrid w-inline-block">
                      <img srcSet={node.frontmatter.featuredimage} loading="lazy" alt="" className="imagegrid"/>
                      <div className="gridcontent">
                        <div className="categblock">
                          <div className="div-tag">{node.frontmatter.categoria}</div>
                        </div>
                        <Heading color="color1" alignment="left">{node.frontmatter.title}</Heading>
                        <div className="autdate">
                          <div className="autor">Fecha</div>
                          <div className="fecha">{node.frontmatter.date}</div>
                        </div>
                      </div>
                    </Link>
                ))}

                {data.item4.edges.map(({ node }) => (
                    <Link id="w-node-_4a979408-d186-ce14-87f8-436f8c51704c-c67b1059" to={node.fields.slug} class="divgrid w-inline-block">
                      <img srcSet={node.frontmatter.featuredimage} loading="lazy" alt="" className="imagegrid"/>
                      <div className="gridcontent">
                        <div className="categblock">
                          <div className="div-tag">{node.frontmatter.categoria}</div>
                        </div>
                        <Heading color="color1" alignment="left">{node.frontmatter.title}</Heading>
                        <div className="autdate">
                          <div className="autor">Fecha</div>
                          <div className="fecha">{node.frontmatter.date}</div>
                        </div>
                      </div>
                    </Link>
                ))}
              
              
              
              
            </div>
            <div className="_5050-holder">
              <div className="_5050-div">
                {data.item4.edges.map(({ node }) => (
              <Link to={node.fields.slug}><PostBlockLarge img={node.frontmatter.featuredimage} title={node.frontmatter.title} description={node.frontmatter.short_description} categoria={node.frontmatter.categoria} date={node.frontmatter.date}/></Link>  
              ))}
              </div>
              <div className="_5050-div">
                <h1>10DATOS.COM</h1>
                <p>10datos.com es una página de entretenimiento, publicidad y promoción. Si tienes datos curiosos que quieras compartir con nosotros puedes escribirnos en nuestro facebook o instagram. Para promoción, contáctanos y estaremos encantados de trabajar contigo</p>
              </div>
            </div>
            </div>
        </Layout>
    </React.Fragment>
  
    
  ) 
}
export const query = graphql`
  query{
  item1: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 1, skip: 0) {
    edges {
      node {
        frontmatter {
          date(formatString: "MM-DD-YYYY")
          title
          featuredimage
          categoria
        }
        fields{
          slug
        }
      }
    }
  }
  item2: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 1, skip: 1) {
    edges {
      node {
        frontmatter {
          date(formatString: "MM-DD-YYYY")
          title
          featuredimage
          categoria
        }
        fields{
          slug
        }
      }
    }
  }
  item3: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 1, skip: 2) {
    edges {
      node {
        frontmatter {
          date(formatString: "MM-DD-YYYY")
          title
          featuredimage
          categoria
        }
        fields{
          slug
        }
      }
    }
  }
  item4: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 1, skip: 3) {
    edges {
      node {
        frontmatter {
          date(formatString: "MM-DD-YYYY")
          title
          featuredimage
          categoria
        }
        fields{
          slug
        }
      }
    }
  }
  item5: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 5, skip: 4) {
    edges {
      node {
        frontmatter {
          date(formatString: "MM-DD-YYYY")
          title
          short_description
          featuredimage
          categoria
        }
        fields{
          slug
        }
      }
    }
  }
}
`
