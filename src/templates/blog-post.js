import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import logoChico from "../images/logo_small.png"
import Layout from "../layouts/layout"
import Heading from "../components/heading"
import kebabCase from "lodash/kebabCase"
import InfoBlock from "../components/infoblock"
import PropTypes from "prop-types"
import showdown from "showdown"

export default function BlogPost({ data }) {
  const post = data.item1
  //

  const perro = "https://www.10datos.com/"
  const converter = new showdown.Converter()

  const MarkdownContent = ({ content, className }) => (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
    />
  )
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>"{data.item1.frontmatter.title} | 10datos"</title>
        <meta
          name="description"
          content={data.item1.frontmatter.short_description}
        />
        <script type="application/ld+json">
          {`
                {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id":\"${perro}\"
                  },
                  "headline": \"${data.item1.frontmatter.title}\",
                  "description": \"${data.item1.frontmatter.short_description}\",
                  "image": "https://www.10datos.com/assets/${data.item1.frontmatter.featuredimage}",  
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
                  "datePublished": \"${data.item1.frontmatter.date}\",
                  "dateModified": \"${data.item1.frontmatter.date}\"
                }
                `}
        </script>
      </Helmet>
      <Layout>
        <div className="blog-post-container">
          <div className="div-grey-post" />
          <div className="blog-post">
            <div className="top-post">
              <div className="featuredimage">
                <img
                  src={post.frontmatter.featuredimage}
                  loading="lazy"
                  width="500"
                  alt=""
                  className="img-large-post"
                />
              </div>
              <div className="short-description">
                <Heading color="#edf2f4">{post.frontmatter.title}</Heading>
                <div className="parpost light">{post.frontmatter.date}</div>
                <div className="tags-div">
                  {post.frontmatter.tags.map(tag => (
                    <Link key={tag + `tag`} to={`/tags/${kebabCase(tag)}/`}>
                      <div className="div-tag">{tag}</div>
                    </Link>
                  ))}
                </div>
                <p className="parpost">{post.frontmatter.short_description}</p>
              </div>
            </div>
            <div
              className="div-text-post"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(post.frontmatter.mk1),
              }}
            />
            <div
              className="div-text-post"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(post.frontmatter.mk2),
              }}
            />
            <div
              className="div-text-post"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(post.frontmatter.mk3),
              }}
            />
            <div
              className="div-text-post"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(post.frontmatter.mk4),
              }}
            />
            <div
              className="div-text-post"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(post.frontmatter.mk5),
              }}
            />
            {post.relatedPosts && (
              <div className="related-posts">
                <Heading color="color2">Más artículos relacionados</Heading>
                {post.relatedPosts?.map(({ frontmatter, fields }) => {
                  const { slug } = fields
                  const { title } = frontmatter
                  const { short_description } = frontmatter
                  const { featuredimage } = frontmatter
                  return (
                    <li key={title}>
                      <Link to={slug}>
                        <InfoBlock
                          title={title}
                          img={featuredimage}
                          description={short_description}
                        />
                      </Link>
                    </li>
                  )
                })}
              </div>
            )}
          </div>

          <div className="div-grey-post" />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    item1: markdownRemark(fields: { slug: { eq: $slug } }) {
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
      fields {
        slug
      }
      relatedPosts {
        frontmatter {
          title
          tags
          featuredimage
          date(formatString: "MM-DD-YYYY")
          short_description
        }
        fields {
          slug
        }
      }
    }
  }
`
