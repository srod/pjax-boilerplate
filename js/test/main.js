var tests = Object.keys(window.__karma__.files).filter(function(file) {
    return /test\.(.*)\.js$/.test(file);
});

require({
    baseUrl: '/base/js',

    paths: {
        chai: 'vendor/chai/chai',
        jquery: 'vendor/jquery/jquery',
        underscore: 'vendor/underscore/underscore',
        backbone: 'vendor/backbone/backbone',
        localstorage: 'vendor/backbone.localStorage/backbone.localStorage'
    },

    // ask requirejs to load these files (all our tests)
    deps: tests,

    // start test run, once requirejs is done
    callback: window.__karma__.start
});