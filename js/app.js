(function() {
    'use strict';

    require.config({
        baseUrl: 'js',

        paths: {
            jquery: 'vendor/jquery/dist/jquery',
            underscore: 'vendor/underscore/underscore',
            backbone: 'vendor/backbone/backbone'
        },

        shim: {
            underscore: {
                exports: '_'
            },
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            }
        }
    });

    require(['modules/router'], function(Router) {
        Router.initialize();
    });
}());