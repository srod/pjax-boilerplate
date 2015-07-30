import Cache from '../src/js/core/cache';

describe('cache', () => {
  let url = '/homepage.html';
  let cache = new Cache();
  // remove from cache if exists (local storage)
  cache.removeCache(url);

  describe('.setCache', () => {
    it('should set in cache', (done) => {
      let cacheData = cache.setCache(url, {});
      expect(cacheData).to.be.a('object');
      expect(cacheData.attributes.id).to.equal(url);
      done();
    });
  });

  describe('.getCache', () => {
    it('should get from cache a null value', (done) => {
      let cacheData = cache.getCache('/fake-url.html');
      expect(cacheData).to.be.null;
      done();
    });

    it('should get from cache', (done) => {
      var cacheData = cache.getCache(url);
      expect(cacheData).to.be.a('object');
      expect(cacheData.attributes.id).to.equal(url);
      done();
    });
  });

  describe('.removeCache', () => {
    it('should remove from cache', (done) => {
      let cacheData = cache.removeCache(url);
      expect(cacheData).to.be.true;
      done();
    });
  });
});
