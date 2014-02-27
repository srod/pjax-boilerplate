define(function(require) {
    'use strict';

    var $ = require('jquery');

    var cleanURL = function(url) {
        url = encodeURI(url);

        return url.replace(/\/|-|\\|\?|=/g, '');
    };

    var hasInsertAdjacentHTML = !!$('body').prop('insertAdjacentHTML');

    var html = function(type, domobj, html) {
        if (hasInsertAdjacentHTML) {
            domobj.insertAdjacentHTML(type, html);
        } else {
            // jquery fallback
            switch (type) {
                case 'beforeend':
                    $(domobj).append(html);
                    break;
                case 'afterbegin':
                    $(domobj).prepend(html);
                    break;
                case 'beforebegin':
                    $(domobj).before(html);
                    break;
                case 'afterend':
                    $(domobj).after(html);
                    break;
            }
        }
        return domobj;
    };

    var append = function(domobj, shtml) {
        return html('beforeend', domobj, shtml);
    };

    var prepend = function(domobj, shtml) {
        return html('afterbegin', domobj, shtml);
    };

    var before = function(domobj, shtml) {
        return html('beforebegin', domobj, shtml);
    };

    var after = function(domobj, shtml) {
        return html('afterend', domobj, shtml);
    };

    return {
        cleanURL: cleanURL,
        append: append,
        prepend: prepend,
        before: before,
        after: after
    };
});