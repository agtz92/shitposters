import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import PostBlockLarge from "../components/postBlockLarge"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import imagetest from "../images/test.jpg"

export default function Home({ data }) {
  return (

    <Layout>
       

  
  <Heading color="color1" alignment="center">El blog de Mums</Heading>
        
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
                <div className="autor">Autor</div>
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
                <div className="autor">Autor</div>
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
                <div className="autor">Autor</div>
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
                <div className="autor">Autor</div>
                <div className="fecha">{node.frontmatter.date}</div>
              </div>
            </div>
          </Link>
       ))}
    
    
    
    
  </div>
  <div className="_5050-holder">
    <div className="_5050-div">
      {data.item4.edges.map(({ node }) => (
    <Link to={node.fields.slug}><PostBlockLarge img={node.frontmatter.featuredimage} title={node.frontmatter.title}description="LOREM IPSUM DESCRIPCION" categoria={node.frontmatter.categoria}/></Link>  
    ))}
    </div>
    <div className="_5050-div">
      <h1>Heading</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
    </div>
  </div>
  </div>
    </Layout>
    
  ) 
}
export const query = graphql`
  query{
  item1: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 1, skip: 0) {
    edges {
      node {
        frontmatter {
          date
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
          date
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
          date
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
          date
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
          date
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
}
`
