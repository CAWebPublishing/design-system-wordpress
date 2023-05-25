/**
 * 
 * @see https://getbootstrap.com/docs/5.3/getting-started/webpack/#import-bootstrap
 * @see https://www.toptal.com/react/webpack-react-tutorial-pt-1
 */
const path = require('path');

//import path from 'path';

module.exports = {
  mode: 'none',
  entry: {
    "admin": [
      './src/scripts/admin/',
    ],
    "design-system": [
        '@cagov/ds-skip-to-content',
        '@cagov/ds-statewide-header',
        '@cagov/ds-site-header',
        '@cagov/ds-site-navigation/dist/index.css',
        '@cagov/ds-site-navigation/dist/index.js',
        '@cagov/ds-statewide-footer',
        '@cagov/ds-site-footer',
        '@cagov/ds-link-icon',
        './src/styles/frontend.scss',
    ],
    "cagov": {
        import: '@cagov/ds-base-css/dist/themes/cagov.css',
        dependOn: 'design-system'
    },
    "cannabis": {
        import: '@cagov/ds-base-css/dist/themes/cannabis.css',
        dependOn: 'design-system'
    },
    "drought": {
        import: '@cagov/ds-base-css/dist/themes/drought.css',
        dependOn: 'design-system'
    }
  },
  module:{
      rules: [
        { 
          test: /\.[s]?css$/i, 
          use: [
            'style-loader', // Adds CSS to the DOM by injecting a `<style>` tag
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