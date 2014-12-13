define(['jquery', 'backbone', 'chai', 'core/cache', 'modules/utils'],
  function($, Backbone, chai, Cache, Utils) {
  'use strict';

  var expect = chai.expect;

  describe('cache', function() {
    var url = '/homepage.html';

    describe('.setCache', function() {
      it('should set in cache', function(done) {
        var cacheData = Cache.setCache(Utils.cleanURL(url), {});
        expect(cacheData).to.be.a('object');
        done();
      });
    });

    describe('.getCache', function() {
      it('should get from cache a null value', function(done) {
        var cacheData = Cache.getCache(Utils.cleanURL('/fake-url.html'));
        expect(cacheData).to.be.null;
        done();
      });

      it('should get from cache', function(done) {
        var cacheData = Cache.getCache(Utils.cleanURL(url));
        expect(cacheData).to.be.a('object');
        done();
      });
    });
  });
});