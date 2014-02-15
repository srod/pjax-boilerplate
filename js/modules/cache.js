define(function(require) {
    'use strict';

    var Localstorage = require('localstorage');
    var Backbone = require('backbone');
    var data;

    var Collection = Backbone.Collection.extend({
        localStorage: new Localstorage('cache')
    });

    var getCache = function(id) {
        return data.get(id);
    };

    var setCache = function(id, json) {
        data.create({
            id: id,
            json: json
        });
    };

    var initialize = function() {
        data = new Collection();

        // Retrieve all cache data
        data.fetch();
    }();

    return {
        collection: Collection,
        getCache: getCache,
        setCache: setCache
    };
});