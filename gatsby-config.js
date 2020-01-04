// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "@afuh/gatsby-theme-minimal",
      options: {
        contentful: {
          spaceId: "itzcgbb28n96",
          accessToken: "QIhHsn-YP0lMWNsyNLnWKr9E5_76TgehtZVZw1Ej7SU"
        },
        title: "Living Life",
        description: "and writing some things down",
        siteUrl: 'https://objective-jennings-0c6dfa.netlify.com', // no trailing slash
      }
    }
  ]
}
