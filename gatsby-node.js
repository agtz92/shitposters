const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
const tagTemplate = path.resolve("src/templates/tags.js")
const categTemplate = path.resolve("src/templates/categorias.js")

//OnCreateNode
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

//create Pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categoria) {
          fieldValue
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  //Use Blog Template
  result.data.postsRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

  //Tags
  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
  //Categorias
  // Extract categoria data from query
  const categories = result.data.categoriesGroup.group
  // Make categoria pages
  categories.forEach(categoria => {
    createPage({
      path: `/categorias/${_.kebabCase(categoria.fieldValue)}/`,
      component: categTemplate,
      context: {
        categoria: categoria.fieldValue,
      },
    })
  })
}

// Resolver for related posts
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    MarkdownRemark: {
      relatedPosts: {
        type: ["MarkdownRemark"],
        resolve: (source, args, context, info) => {
          let tagsArray = []

          if (Array.isArray(source.frontmatter.tags)) {
            // If it's already an array, use it as is
            tagsArray = source.frontmatter.tags
          } else if (typeof source.frontmatter.tags === "string") {
            // If it's a string, split it into an array (you can adjust the delimiter)
            tagsArray = source.frontmatter.tags
              .split(",")
              .map(tag => tag.trim())
          } else if (source.frontmatter.tags) {
            // Handle other data types or single tag case
            tagsArray = [source.frontmatter.tags]
          }

          return context.nodeModel.runQuery({
            query: {
              filter: {
                id: {
                  ne: source.id,
                },
                frontmatter: {
                  tags: {
                    in: tagsArray, // Use the tags array
                  },
                },
              },
            },
            type: "MarkdownRemark",
          })
        },
      },
    },
  }

  createResolvers(resolvers)
}
