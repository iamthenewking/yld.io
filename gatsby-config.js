module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-styled-components`,
    `gatsby-remark-responsive-iframe`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `22g1lenhck4z`,
        accessToken: `be809388a1328a8177a6f37c660631902bea868511fa52a5246a73d64416d90b`,
      },
    },
    {
      resolve: 'gatsby-source-lever',
      options: {
        site: 'yld',
        verboseOutput: false,
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `yld-engineering-blog`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
      },
    },
  ],
}
