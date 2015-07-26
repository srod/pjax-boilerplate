import View from './view';
import Cache from './cache';
import utils from '../modules/utils';

class Ajax {
  constructor() {
    console.log('ajax init');

    //this.view = new View();
  }

  ajaxRequest(url) {
    let view = new View();
    let cache = new Cache();
    let cacheData = cache.getCache(utils.cleanURL(url));
    let ajaxRequestCallback = (json) => {
      console.log('json', json);
      console.log('this', this);
      // Set data in cache
      cache.setCache(utils.cleanURL(url), json);
      console.log('DONE');
      view.create(json);
    };

    // if we have nothing in cache
    if (!cacheData) {
      console.log('NO CACHE', url);
      $.ajax({
        url: '/' + (url || ''),
        dataType: 'json',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-PJAX', 'true');
        }
      }).done(ajaxRequestCallback);
    } else {
      console.log('ELSE');
      view.create(cacheData.attributes.json);
    }
  }
}

export default Ajax;
