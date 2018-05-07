module.exports = {
  siteMetadata: {
    title: 'JMac Portfolio Site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content-pages'
      }
    },
    'gatsby-transformer-remark'
  ],
};
