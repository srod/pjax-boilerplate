import settings from '../settings';

var data;
var cache = settings.CACHE;
var cacheExpirationSeconds = (60 * 60 * 1); // 1 heure

class Cache {
  constructor() {
    console.log('cache init');

    var Collection = Backbone.Collection.extend({
      localStorage: new Backbone.LocalStorage('cache')
    });

    data = new Collection();

    // Retrieve all cache data
    data.fetch();
  }

  static getCache(id) {
    if (!cache) {
      return false;
    }

    var dataInCache = (data.get(id) || null);

    if (dataInCache) {
      var expiration = Math.round((new Date().getTime() - dataInCache.attributes.timestamp) / 1000);

      // is cache expired ?
      if (expiration > cacheExpirationSeconds) {
        //removeCache(dataInCache);
        dataInCache = null;
      }
    }

    return dataInCache;
  }

  static setCache(id, json) {
    if (!cache) {
      return false;
    }

    data.create({
      id: id,
      timestamp: new Date().getTime(),
      json: json
    });

    return data.get(id);
  }

  static removeCache(item) {
    data.remove(item);
  }
}

export default Cache;
