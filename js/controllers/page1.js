define(function(require) {
    'use strict';

    var $ = require('jquery');

    var initialize = function(json) {
        console.log('in controller page1');

        $('#container').html(json.html);
    };

    return {
        initialize: initialize
    };
});