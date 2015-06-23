import Router from './core/router';

(() => {
  let router = new Router();
  router.start();
})();

/*
(function() {
  'use strict';

  require.config({
    baseUrl: '/js',

    paths: {
      jquery: 'vendor/jquery/jquery',
      underscore: 'vendor/underscore/underscore',
      backbone: 'vendor/backbone/backbone',
      localstorage: 'vendor/backbone.localStorage/backbone.localStorage',
      homepage: 'views/homepage',
      page1: 'views/page1',
      page2: 'views/page2'
    },

    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: [
          'underscore',
          'jquery'
        ],
        exports: 'Backbone'
      }
    }
  });

  require([
    'core/router',
    'modules/analytics'
  ], function initializeApp(Router, Analytics) {
    Router.initialize();
    Analytics.initialize();
  });
}());*/
