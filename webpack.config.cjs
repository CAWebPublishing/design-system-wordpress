/**
 * 
 * @see https://getbootstrap.com/docs/5.3/getting-started/webpack/#import-bootstrap
 * @see https://www.toptal.com/react/webpack-react-tutorial-pt-1
 */
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs'); // File System

let entries = {
  "admin": [
    './src/scripts/admin/',
  ]
};

fs.readdirSync('./node_modules/@cagov/ds-base-css/dist/themes/').filter(file => file.toString().endsWith('.css') ).forEach((color) => {
  var scheme = color.substring(0, color.indexOf('.')).replace(' ', '');

  entries[`${scheme}`] = [
    `@cagov/ds-base-css/dist/themes/${color}`,
    '@cagov/ds-skip-to-content',
    '@cagov/ds-statewide-header',
    '@cagov/ds-site-header',
    '@cagov/ds-site-navigation/dist/index.css',
    '@cagov/ds-site-navigation/dist/index.js',
    '@cagov/ds-statewide-footer',
    '@cagov/ds-site-footer',
    '@cagov/ds-link-icon',
    './src/styles/frontend.scss',
    './src/scripts/custom.js',
  ]

})

module.exports = {
  mode: 'none',
  plugins: [new MiniCssExtractPlugin({
    linkType: "text/css",
  })],
  output: {
    clean: true
  },
  entry: entries,
  module:{
      rules: [
        { 
          test: /\.[s]?css$/i, 
          use: [
            MiniCssExtractPlugin.loader,
            //'style-loader', // Adds CSS to the DOM by injecting a `<style>` tag
            'css-loader', // Interprets `@import` and `url()` like `import/require()` and will resolve them
            {
              // Loader for webpack to process CSS with PostCSS
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: () => [
                    autoprefixer
                  ]
                }
              }
            },
            'sass-loader', // Loads a SASS/SCSS file and compiles it to CSS
          ]
        }
      ],
  }
}