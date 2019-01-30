// @flow

module.exports = {
  pathPrefix: `/margarita`,
  siteMetadata: {
    title: `Margarita`,
    description: `Margarita is an example project of what you can build with Tequila.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Margarita`,
        short_name: `Margarita`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_margarita.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
