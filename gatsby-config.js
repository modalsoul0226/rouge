require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://in-ter-vention.ca",
    title: "intervention",
    description: "Marxist cultural study group based in Toronto.",
    author: "people"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#c31414`,
        theme_color: `#c31414`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
};
