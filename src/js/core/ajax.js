//import Cache from './cache';

class Ajax {
  constructor() {
    console.log('ajax init');
  }

  /*ajaxRequest(url) {
    var cacheData = Cache.getCache(Utils.cleanURL(url));

    // if we have nothing in cache
    if (!cacheData) {
      $.ajax({
        url: '/' + (url || ''),
        dataType: 'json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-PJAX', 'true');
        }
      }).done(function ajaxRequestCallback(json) {
        // Set data in cache
        Cache.setCache(Utils.cleanURL(url), json);
        View.create(json);
      });
    } else {
      View.create(cacheData.attributes.json);
    }
  };*/
}

export default Ajax;

/*define(function(require) {
  'use strict';

  var View = require('core/view');
  var Utils = require('modules/utils');
  var Cache = require('core/cache');
  var $ = require('jquery');

  var ajaxRequest = function ajaxRequest(url) {
    var cacheData = Cache.getCache(Utils.cleanURL(url));

    // if we have nothing in cache
    if (!cacheData) {
      $.ajax({
        url: '/' + (url || ''),
        dataType: 'json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-PJAX', 'true');
        }
      }).done(function ajaxRequestCallback(json) {
        // Set data in cache
        Cache.setCache(Utils.cleanURL(url), json);
        View.create(json);
      });
    } else {
      View.create(cacheData.attributes.json);
    }
  };

  return {
    ajaxRequest: ajaxRequest
  };
});*/
