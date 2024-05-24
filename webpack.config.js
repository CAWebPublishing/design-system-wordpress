/**
 * Webpack Configurations the for WordPress Design System Plugin
 */
const fs = require('fs'); // File System

let entries = {
  "admin": [
    './src/scripts/admin',
  ],
  "campaign": [
    '@cagovweb/go-site-base-css/build/index.css',
    '@cagovweb/go-site-base-css/build/index.js',
    '@cagovweb/go-site-header/build/index.css',
    '@cagovweb/go-site-header/build/index.js',
    '@cagovweb/go-site-footer/build/index.css',
    '@cagovweb/go-site-footer/build/index.js',
    '@cagovweb/go-site-footer/build/images/gov-seal.png',
    '@cagovweb/go-site-footer/build/fonts/share-facebook.svg',
    '@cagovweb/go-site-footer/build/fonts/share-instagram.svg',
    '@cagovweb/go-site-footer/build/fonts/share-tiktok.svg',
    '@cagovweb/go-site-footer/build/fonts/share-twitter-X.svg',
    '@cagovweb/go-site-footer/build/fonts/share-youtube.svg'
    /*'@cagovweb/go-site-base-css/dist/variables.scss',
    '@cagovweb/go-site-base-css/dist/typography.scss',
    '@cagovweb/go-site-base-css/dist/fonts.scss',
    '@cagovweb/go-site-base-css/dist/page.scss',
    '@cagovweb/go-site-header/dist/style.scss',
    '@cagovweb/go-site-header/dist/mobile.js',
    '@cagovweb/go-site-header/dist/search.js',
    '@cagovweb/go-site-header/dist/ca-gov-toggle.js',
    '@cagovweb/go-site-footer/dist/style.scss',
    '@cagovweb/go-site-footer/images/gov-seal.png',
    '@cagovweb/go-site-footer/images/share-facebook.svg',
    '@cagovweb/go-site-footer/images/share-instagram.svg',
    '@cagovweb/go-site-footer/images/share-tiktok.svg',
    '@cagovweb/go-site-footer/images/share-twitter-X.svg',
    '@cagovweb/go-site-footer/images/share-youtube.svg'*/
  ]
};

fs.readdirSync('./node_modules/@cagov/ds-base-css/dist/themes/').filter(file => file.toString().endsWith('.css') ).forEach((color) => {
  var scheme = color.substring(0, color.indexOf('.')).replace(' ', '');

  entries[`${scheme}`] = [
    `@cagov/ds-base-css/dist/themes/${color}`,
    './src/default.js'
  ]

})

module.exports = {
  entry: entries
}