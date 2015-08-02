var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var pathSrc = 'src/';
var pathTest = 'test/';

module.exports = function(config) {
  config.set({

    files: [
      // PhantomJS polyfill
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/**/*_test.js'
    ],

    frameworks: ['mocha', 'chai'],

    preprocessors: {
      'test/**/*_test.js': ['webpack']
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    webpack: {
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            include: path.resolve(pathTest),
            loader: 'babel'
          },
          {
            test: /\.js$/,
            include: path.resolve(pathSrc),
            loader: 'isparta!jscs!eslint'
          }
        ],
        loaders: webpackConfig.loaders
      },
      externals: webpackConfig.externals,
      resolve: webpackConfig.resolve,
      plugins: webpackConfig.plugins
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-spec-reporter'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher')
    ],

    browsers: ['PhantomJS']
  });
};
