define(function(require) {
    'use strict';

    var cleanURL = function(url) {
        url = encodeURI(url);

        return url.replace(/\/|-|\\|\?|=/g, '');
    };

    return {
        cleanURL: cleanURL
    };
});