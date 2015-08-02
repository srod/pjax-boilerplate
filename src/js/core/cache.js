import settings from '../settings';

const CACHE_EXPIRATION_SECONDS = (60 * 60 * 1); // 1 hour

class Cache {
  constructor() {
    console.log('core === Cache constructor');

    this.cache = settings.CACHE;

    let Collection = Backbone.Collection.extend({
      localStorage: new Backbone.LocalStorage('cache')
    });

    this.data = new Collection();

    // Retrieve all cache data
    this.data.fetch();
  }

  getCache(id) {
    if (!this.cache) {
      return;
    }

    let dataInCache = (this.data.get(id) || null);
    let dataExpired = this.isExpired(dataInCache);

    if (!dataExpired) {
      return dataInCache;
    }

    this.removeCache(id);

    return null;
  }

  setCache(id, json) {
    if (!this.cache) {
      return;
    }

    return this.data.create({
      id: id,
      timestamp: new Date().getTime(),
      json: json
    });
  }

  removeCache(id) {
    return !!this.data.remove(id);
  }

  isExpired(dataInCache) {
    if (!dataInCache) {
      return;
    }

    let expiration = Math.round(
      (new Date().getTime() - dataInCache.attributes.timestamp) / 1000
    );

    // is cache expired ?
    if (expiration > CACHE_EXPIRATION_SECONDS) {
      return true;
    }
  }
}

export default Cache;
