import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
   siteMetadata: {
      siteUrl: `https://spencerraymon.de`,
   },
   // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
   // If you use VSCode you can also use the GraphQL plugin
   // Learn more at: https://gatsby.dev/graphql-typegen
   graphqlTypegen: true,
   plugins: [
      'gatsby-plugin-sass',
      {
         resolve: 'gatsby-source-sanity',
         options: { projectId: 'gtllxo8k', dataset: 'production' },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-google-gtag`,
         options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
               'G-MJ303LZRLJ', // Google Analytics / GA
               //'AW-CONVERSION_ID', // Google Ads / Adwords / AW
               //'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
            ],
            // This object gets passed directly to the gtag config command
            // This config will be shared across all trackingIds
            // gtagConfig: {
            // 	optimize_id: 'OPT_CONTAINER_ID',
            // 	anonymize_ip: true,
            // 	cookie_expires: 0,
            // },
            // This object is used for configuration specific to this plugin
            pluginConfig: {
               // Puts tracking script in the head instead of the body
               head: true,
               // Setting this parameter is also optional
               respectDNT: true,
               // Avoids sending pageview hits from custom paths
               exclude: [],
               // Defaults to https://www.googletagmanager.com
               origin: 'https://spencerraymon.de',
               // Delays processing pageview events on route update (in milliseconds)
               delayOnRouteUpdate: 0,
            },
         },
      },
   ],
};

export default config;
