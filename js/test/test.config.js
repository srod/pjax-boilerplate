require.config({
    baseUrl: '/js',
    paths: {
        jquery: 'vendor/jquery/jquery',
        underscore: 'vendor/underscore/underscore',
        backbone: 'vendor/backbone/backbone',
        localstorage: 'vendor/backbone.localStorage/backbone.localStorage',
        chai: 'vendor/chai/chai'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    }
});

require([
    'chai', 'test/test.core-cache'
], function() {
    'use strict';

    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }
});
