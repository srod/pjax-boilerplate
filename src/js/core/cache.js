//var data;
//var cache = settings.CACHE;
//var cacheExpirationSeconds = (60 * 60 * 1); // 1 heure

class Cache {
  constructor() {
    console.log('cache init');
  }
}

export default Cache;

/*define(function(require) {
  'use strict';

  var settings = require('settings');
  var Localstorage = require('localstorage');
  var Backbone = require('backbone');
  var data;
  var cache = settings.CACHE;
  var cacheExpirationSeconds = (60 * 60 * 1); // 1 heure

  var Collection = Backbone.Collection.extend({
    localStorage: new Localstorage('cache')
  });

  var getCache = function getCache(id) {
    if (!cache) {
      return false;
    }

    var dataInCache = (data.get(id) || null);

    if (dataInCache) {
      var expiration = Math.round((new Date().getTime() - dataInCache.attributes.timestamp) / 1000);

      // is cache expired ?
      if (expiration > cacheExpirationSeconds) {
        removeCache(dataInCache);
        dataInCache = null;
      }
    }

    return dataInCache;
  };

  var setCache = function setCache(id, json) {
    if (!cache) {
      return false;
    }

    data.create({
      id: id,
      timestamp: new Date().getTime(),
      json: json
    });

    return data.get(id);
  };

  var removeCache = function(item) {
    data.remove(item);
  };

  var initialize = function initialize() {
    data = new Collection();

    // Retrieve all cache data
    data.fetch();
  }();

  return {
    collection: Collection,
    getCache: getCache,
    setCache: setCache
  };
});*/
