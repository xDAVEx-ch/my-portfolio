/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/, // if path is /images/svg/ your including rule must only contain /svg/
          options: {
            name: "Logo",
            props: {
              className: "logo",
              title: "main-logo"
            }
          }
        }
      }
      
    }
  ],
}
