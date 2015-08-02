var path = require('path');
var webpack = require('webpack');
var pathSrc = 'src/';

module.exports = {
  entry: {
    index: './src/js/app.js',
    homepage: ['./src/js/views/homepage.js'],
    page1: ['./src/js/views/page1.js'],
    page2: ['./src/js/views/page2.js'],
    vendor: [
      'backbone',
      'backbone.nativeview',
      'backbone.nativeajax',
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
      },
      // Make UMD hit the CommonJS path.
      {
        test: /exoskeleton\.js$/,
        loader: 'imports?define=>false'
      }
    ]
  },
  externals: {
    // Deliberately undefined vars for conditional exclusion for exoskeleton.
    jquery: 'undefined',
    underscore: 'undefined'
  },
  resolve: {
    alias: {
      backbone: 'exoskeleton',
      'backbone.localStorage': 'backbone.localstorage'
    }
  },
  plugins: [
    // Avoid publishing files when compilation failed
    //new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      Backbone: 'backbone',
      'Backbone.NativeView': 'backbone.nativeview',
      'Backbone.ajax': 'backbone.nativeajax',
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
