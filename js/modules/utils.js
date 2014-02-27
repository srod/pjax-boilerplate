define(function(require) {
    'use strict';

    var $ = require('jquery');

    var cleanURL = function cleanURL(url) {
        url = encodeURI(url);

        return url.replace(/\/|-|\\|\?|=/g, '');
    };

    var hasInsertAdjacentHTML = !!$('body').prop('insertAdjacentHTML');

    var html = function html(type, domobj, shtml) {
        if (hasInsertAdjacentHTML) {
            domobj.insertAdjacentHTML(type, shtml);
        } else {
            // jquery fallback
            switch (type) {
                case 'beforeend':
                    $(domobj).append(shtml);
                    break;
                case 'afterbegin':
                    $(domobj).prepend(shtml);
                    break;
                case 'beforebegin':
                    $(domobj).before(shtml);
                    break;
                case 'afterend':
                    $(domobj).after(shtml);
                    break;
            }
        }
        return domobj;
    };

    var append = function append(domobj, shtml) {
        return html('beforeend', domobj, shtml);
    };

    var prepend = function prepend(domobj, shtml) {
        return html('afterbegin', domobj, shtml);
    };

    var before = function before(domobj, shtml) {
        return html('beforebegin', domobj, shtml);
    };

    var after = function after(domobj, shtml) {
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