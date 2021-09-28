import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import logoChico from "../images/logo_small.png"
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import kebabCase from "lodash/kebabCase"
import PropTypes from 'prop-types'
import showdown from 'showdown'

export default function BlogPost({ data }) {
  
  const post = data.markdownRemark
  //

  const perro = "https://www.10datos.com/";
  const converter = new showdown.Converter()

  const MarkdownContent = ({ content, className }) => (
    <div className={className} dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
  )
  return (
    <React.Fragment>
    <Helmet >
                <meta charSet="utf-8" />
                <title>"{data.markdownRemark.frontmatter.title} | 10datos"</title>
                <meta name="description" content={data.markdownRemark.frontmatter.short_description} />
                <script type="application/ld+json">
                  {`
                {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id":\"${perro}\"
                  },
                  "headline": \"${data.markdownRemark.frontmatter.title}\",
                  "description": \"${data.markdownRemark.frontmatter.short_description}\",
                  "image": "https://www.10datos.com/assets/${data.markdownRemark.frontmatter.featuredimage}",  
                  "author": {
                    "@type": "Organization",
                    "name": "10datos.com"
                  },  
                  "publisher": {
                    "@type": "Organization",
                    "name": "10datos",
                    "logo": {
                      "@type": "ImageObject",
                      "url": \"https://www.10datos.com/${logoChico}\"
                    }
                  },
                  "datePublished": \"${data.markdownRemark.frontmatter.date}\",
                  "dateModified": \"${data.markdownRemark.frontmatter.date}\"
                }
                `}
                </script>
    </Helmet>
    <Layout>
      <div className="blog-post-container">
        <div className="div-grey-post"/>
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
          <div className="div-text-post" dangerouslySetInnerHTML={{ __html: converter.makeHtml(post.frontmatter.mk1) }} />
          <div className="div-text-post" dangerouslySetInnerHTML={{ __html: converter.makeHtml(post.frontmatter.mk2) }} />
          <div className="div-text-post" dangerouslySetInnerHTML={{ __html: converter.makeHtml(post.frontmatter.mk3) }} />
          <div className="div-text-post" dangerouslySetInnerHTML={{ __html: converter.makeHtml(post.frontmatter.mk4) }} />
          <div className="div-text-post" dangerouslySetInnerHTML={{ __html: converter.makeHtml(post.frontmatter.mk5) }} />
        </div>
        <div className="div-grey-post"/>
      </div>
      
    </Layout>
    </React.Fragment>
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
        date(formatString: "MM-DD-YYYY")
        short_description
        tags
        mk1
        mk2
        mk3
        mk4
        mk5
      }
      fields{
          slug
      }
    }
  }
`