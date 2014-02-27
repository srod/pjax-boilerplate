define(function(require) {
    'use strict';

    var $ = require('jquery');
    var $html;
    var $body;
    var $container;

    /**
     * to see : http://stackoverflow.com/questions/9916073/how-to-load-bootstrapped-models-in-backbone-js-while-using-amd-require-js/10288587#10288587
     */

    var initialize = function initialize() {
        $html = $('html');
        $body = $('body');
        $container = $('#container');
    }();

    return {
        $html: $html,
        $body: $body,
        $container: $container
    };
});