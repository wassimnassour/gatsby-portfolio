require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(process.env);

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    author: {
      name: `Wassim Nassour`,
      summary: `React/React Native Developer who lives and works in Casablanca building useful things.`,
    },
    description: `React / React Native Develope`,
    siteUrl: `https://wassimnassour.vercel.app/`,
    social: {
      twitter: `wassimnassour`,
    },
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wassim Nassour Portfolio`,
        short_name: `Wassim`,
        description: `The application does cool things and makes your life better.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        localize: [
          {
            start_url: `/de/`,
            lang: `de`,
            name: `Die coole Anwendung`,
            short_name: `Coole Anwendung`,
            description: `Die Anwendung macht coole Dinge und macht Ihr Leben besser.`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:200,300,400,600,700,800,900`,
          `source sans pro\:200,300,400,600,700,800,900`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `posts`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 850,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "material",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
