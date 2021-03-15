import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import kebabCase from "lodash/kebabCase"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="div-grey-post"></div>
        <div className="blog-post">
          <div className="top-post">
            <div className="featuredimage" ><img src={ post.frontmatter.featuredimage} loading="lazy" width="500" alt="" className="img-large-post"/></div>
            <div className="short-description">
                            
                <Heading color="dark">{post.frontmatter.title}</Heading>
                <div className="parpost light">{post.frontmatter.date}</div>
                <div className="tags-div">
                    {post.frontmatter.tags.map((tag) => (
                    <Link key={tag + `tag`} to={`/tags/${kebabCase(tag)}/`}><div className="div-tag">{tag}</div></Link> 
                    ))}</div>
                <p className="parpost">{post.frontmatter.short_description}</p>
            </div>
          </div>
          <div className="div-text-post" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <div className="div-grey-post"></div>
      </div>
      
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        categoria
        featuredimage
        date
        short_description
        tags
      }
      fields{
          slug
      }
    }
  }
`