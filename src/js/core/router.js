import Ajax from './ajax';

class Router extends Backbone.Router {
  constructor() {
    console.log('router init');

    let options = {};
    options.routes = {
      '*all': () => {
        console.log('router all routes');
        var ajax = new Ajax();
        ajax.ajaxRequest();
      }
    };
    options.initialize = () => {
      //this.bind('route', Analytics.trackPageView);
    };

    super(options);
  }

  start() {
    console.log('router start');

  }
}

export default Router;

/*
define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Ajax = require('core/ajax');
  var View = require('core/view');
  var Analytics = require('modules/analytics');

  var AppRouter = Backbone.Router.extend({
    routes: {
      '*all': Ajax.ajaxRequest
    },
    initialize: function() {
      this.bind('route', Analytics.trackPageView);
    }
  });

  var initialize = function initialize() {
    var router = new AppRouter();

    // check for old browsers that not support pushstate
    var hasPushState = (history.pushState && typeof window.onpopstate !== 'undefined');

    // for old browsers, silent === false, backbone router will trigger the route
    Backbone.history.start({
      pushState: true,
      silent: hasPushState
    });

    // on first load only, bypass router (silent: true), avoid unnecessary ajax request
    if (hasPushState) {
      View.create(null);
    }
  };

  return {
    initialize: initialize
  };
});*/
