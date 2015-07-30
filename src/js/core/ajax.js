import View from './view';
import Cache from './cache';
import utils from '../modules/utils';

class Ajax {
  constructor() {
    console.log('ajax init');
  }

  ajaxRequest(url) {
    let view = new View();
    let cache = new Cache();
    let cacheData = cache.getCache(utils.cleanURL(url));
    let ajaxRequestCallback = (json) => {
      // Set data in cache
      cache.setCache(utils.cleanURL(url), json);
      view.create(json);
    };

    // if we have nothing in cache
    if (!cacheData) {
      $.ajax({
        url: '/' + (url || ''),
        dataType: 'json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-PJAX', 'true');
        }
      }).done(ajaxRequestCallback);
    } else {
      view.create(cacheData.attributes.json);
    }
  }
}

export default Ajax;
