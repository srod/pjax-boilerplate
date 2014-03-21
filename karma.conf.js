// Karma configuration
// Generated on Fri Mar 07 2014 21:52:35 GMT+0100 (CET)

module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: ['mocha', 'requirejs', 'chai'],

        files: [
            // all vendor files
            {pattern: 'js/vendor/**/*.js', included: false},

            // all src and test modules (included: false)
            {pattern: 'js/settings.js', included: false},
            {pattern: 'js/core/**/*', included: false},
            {pattern: 'js/modules/**/*', included: false},
            {pattern: 'js/views/**/*', included: false},
            {pattern: 'js/test/**/test.*.js', included: false},

            // test main require module last
            'js/test/main.js'
        ],

        // list of files to exclude
        exclude: [
            'js/test/test.config.js'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['spec'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS', 'Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
