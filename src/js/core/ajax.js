import View from './view';
import Cache from './cache';
import utils from '../modules/utils';

let view = new View();
let cache = new Cache();

class Ajax {
  constructor() {
    console.log('core === Ajax constructor');
  }

  ajaxRequest(url) {
    let cacheData = cache.getCache(utils.cleanURL(url));
    let ajaxRequestCallback = (json) => {
      // Set data in cache
      cache.setCache(utils.cleanURL(url), json);
      view.create(json);
    };

    // if we have nothing in cache
    if (!cacheData) {
      var req = Backbone.ajax({
        url: '/' + (url || ''),
        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-PJAX', 'true');
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      req.then(ajaxRequestCallback);
    } else {
      view.create(cacheData.attributes.json);
    }
  }
}

export default Ajax;
