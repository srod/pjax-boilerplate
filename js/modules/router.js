define(function(require) {
    'use strict';

    var Backbone = require('backbone');
    var Ajax = require('modules/ajax');
    var $ = require('jquery');

    var ajaxRequest = function(url) {
        url = (url) ? url : 'pages/homepage.html';

        $.ajax({
            url: '/' + url,
            dataType: 'json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-PJAX', 'true');
            },
            success: Ajax.initialize
        });
    };

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
            '*all': ajaxRequest
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