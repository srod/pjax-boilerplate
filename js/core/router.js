define(function(require) {
    'use strict';

    var Backbone = require('backbone');
    var Ajax = require('core/ajax');
    var View = require('core/view');

    var AppRouter = Backbone.Router.extend({
        routes: {
            '*all': Ajax.ajaxRequest
        }
    });

    var initialize = function initialize() {
        var router = new AppRouter();

        // check for old browsers that not support pushstate
        var hasPushState = (history.pushState && typeof window.onpopstate !== 'undefined');

        // for old browsers, silent === false, backbone router will trigger the route
        Backbone.history.start({ pushState: true, silent: hasPushState });

        // on first load only, bypass router (silent: true), avoid unnecessary ajax request
        if (hasPushState) {
            View.create(null);
        }
    };

    return {
        initialize: initialize
    };
});