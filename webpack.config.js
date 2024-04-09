/**
 * Webpack Configurations the for WordPress Design System Plugin
 */
const fs = require('fs'); // File System

let entries = {
  "admin": [
    './src/scripts/admin',
  ],
  "campaign": [
    '@cagovweb/go-site-base-css',
    '@cagovweb/go-site-footer',
    '@cagovweb/go-site-footer/images/gov-seal-v2.svg',
    '@cagovweb/go-site-header',
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