define(function(require) {
    'use strict';

    var Ajax = require('modules/ajax');
    var View = require('modules/view');
    var Backbone = require('backbone');
    var $ = require('jquery');

    var bindLinks = function bindLinks($a) {
        if (Backbone.history) {
            $a.on('click', function(e) {
                e.preventDefault();

                var href = this.pathname + this.search;

                Backbone.history.navigate(href, true);
            });
        }
    };

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

        // bind all links with pjax data attribute
        bindLinks($('a[data-pjax]'));
    };

    return {
        initialize: initialize
    };
});