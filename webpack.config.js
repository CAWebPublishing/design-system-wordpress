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
    '@cagovweb/go-site-footer/src/images/gov-seal.png',
    '@cagovweb/go-site-footer/src/images/share-facebook.svg',
    '@cagovweb/go-site-footer/src/images/share-instagram.svg',
    '@cagovweb/go-site-footer/src/images/share-tiktok.svg',
    '@cagovweb/go-site-footer/src/images/share-twitter-X.svg',
    '@cagovweb/go-site-footer/src/images/share-youtube.svg'
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