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

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    MarkdownRemark: {
      relatedPosts: {
        type: ['MarkdownRemark'],
        resolve: (source, args, context, info) => {
          // Ensure that source.frontmatter.tags is an array or set it to an empty array if it doesn't exist
          const tags = Array.isArray(source.frontmatter.tags)
            ? source.frontmatter.tags
            : [];

          if (tags.length === 0) {
            // If there are no tags, you can decide how to handle this case
            return []; // Return an empty array or handle it based on your logic
          }

          return context.nodeModel.runQuery({
            query: {
              filter: {
                id: {
                  ne: source.id,
                },
                frontmatter: {
                  tags: {
                    in: tags, // Now tags is always an array
                  },
                },
              },
            },
            type: 'MarkdownRemark',
          });
        },
      },
    },
  };
  
  createResolvers(resolvers);
};
