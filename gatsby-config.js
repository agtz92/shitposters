/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  /* Your site config here */
  plugins: [
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/`,
      },
    },
   "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-plugin-social9-socialshare`,
            options: {
                content:  `a667974e50d94b628daa2fa69f7d4a21`,
                async:  true,
                defer:  true
              }
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'static',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              //include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              exclude: ['featuredimage'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
             resolve: "gatsby-plugin-load-script",
              options: {
                id: "s9-sdk",
                async: true,
                defer: true,
                content: "a667974e50d94b628daa2fa69f7d4a21",
                src: "socialshare.min.js"
              },
          },
          
        ],
      },
    },
   `gatsby-plugin-netlify-cms`,
    
  ],
}
