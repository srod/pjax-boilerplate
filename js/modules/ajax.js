define(function(require) {
    'use strict';

    var Utils = require('modules/utils');
    var Cache = require('modules/cache');

    var ajaxRequest = function(url) {
        url = (url) ? url : 'pages/homepage.html';

        var cacheData = Cache.getCache(Utils.cleanURL(url));

        if (!cacheData) {
//            console.log('not cached');
            $.ajax({
                url: '/' + url,
                dataType: 'json',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('X-PJAX', 'true');
                }
            }).done(function(json) {
                // Set data in cache
                Cache.setCache(Utils.cleanURL(url), json);
                parseJson(json);
            });
        } else {
//            console.log('cached');
            parseJson(cacheData.attributes.json);
        }
    };

    var parseJson = function(json) {
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
        ajaxRequest: ajaxRequest
    };
});