define(function(require) {
    'use strict';

    var initialize = function(json) {
        // Set title document
        if (json.title) {
            document.title = json.title;
        }

        // Require controller and initialize it
        if (json.controller) {
            require(['/js/controllers/' + json.controller + '.js'], function(controller) {
                controller.initialize(json);
            });
        }
    };

    return {
        initialize: initialize
    };
});