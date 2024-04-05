/**
 * 
 * @see https://getbootstrap.com/docs/5.3/getting-started/webpack/#import-bootstrap
 * @see https://www.toptal.com/react/webpack-react-tutorial-pt-1
 */
const fs = require('fs'); // File System

let entries = {
  "admin": [
    './src/scripts/admin/caweb',
  ],
  "campaign": [
    '@cagovweb/go-site-base-css',
    '@cagovweb/go-site-footer'
  ]
};

fs.readdirSync('./node_modules/@cagov/ds-base-css/dist/themes/').filter(file => file.toString().endsWith('.css') ).forEach((color) => {
  var scheme = color.substring(0, color.indexOf('.')).replace(' ', '');

  entries[`${scheme}`] = [
    `@cagov/ds-base-css/dist/themes/${color}`,
    './src/index.js'
  ]

})

module.exports = {
  entry: entries
}