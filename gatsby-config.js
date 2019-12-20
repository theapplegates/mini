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
        title: "Your title",
        description: "Your description",
        siteUrl: 'https://example.com', // no trailing slash
      }
    }
  ]
}
