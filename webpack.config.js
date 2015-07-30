/* http://putaindecode.fr/posts/webpack/premier-exemple/ */
/* https://github.com/daniele-zurico/es6-webpack-angular/blob/master/webpack.config.js */

var path = require('path');
var webpack = require('webpack');
var bowerComponentsPath = path.join(__dirname, 'bower_components');
var pathSrc = 'src/';

module.exports = {
  entry: {
    index: './src/js/app.js',
    homepage: ['./src/js/views/homepage.js'],
    page1: ['./src/js/views/page1.js'],
    page2: ['./src/js/views/page2.js'],
    vendor: [
      'jquery',
      'underscore',
      'backbone',
      'backbone.localStorage'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].chunk.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: path.resolve(pathSrc),
        loader: 'jscs!eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(pathSrc),
        loader: 'babel'
      },
      {
        test: /\.(html|txt)$/,
        include: path.resolve(pathSrc),
        loaders: [
          'file?name=[path][name].[ext]&context=./src'
        ]
      }
    ]
  },
  resolve: {
    root: [
      bowerComponentsPath
    ],
    alias: {
      jquery: 'jquery/dist/jquery.js',
      underscore: 'underscore/underscore.js',
      backbone: 'backbone/backbone.js',
      'backbone.localStorage': 'backbone.localStorage/backbone.localStorage.js'
    }
  },
  plugins: [
    // Avoid publishing files when compilation failed
    //new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      Backbone: 'backbone',
      'Backbone.LocalStorage': 'backbone.localStorage'
    })
    // TODO à tester en prod (gain de taille finale ?)
    /*new webpack.ProvidePlugin({
      'process.env': {NODE_ENV: '"production"'}
    })*/
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};
