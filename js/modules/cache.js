define(function(require) {
    'use strict';

    var Localstorage = require('localstorage');
    var Backbone = require('backbone');
    var data;

    var collection = Backbone.Collection.extend({
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
        data = new collection();

        // Retrieve all cache data
        data.fetch();
    }();

    return {
        collection: collection,
        getCache: getCache,
        setCache: setCache
    };
});