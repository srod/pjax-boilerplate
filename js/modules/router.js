define(function(require) {
    'use strict';

    var Ajax = require('modules/ajax');
    var Backbone = require('backbone');
    var $ = require('jquery');

    var bindLinks = function($a) {
        if (Backbone.history && Backbone.history._hasPushState) {
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

    var initialize = function() {
        var router = new AppRouter();
        Backbone.history.start({pushState: true});

        // Bind all links with pjax data attribute
        bindLinks($('a[data-pjax]'));
    };

    return {
        initialize: initialize
    };
});