import Ajax from './ajax';
import View from './view';
import analytics from '../modules/analytics';

class Router extends Backbone.Router {
  constructor() {
    console.log('core === Router constructor');

    let ajax = new Ajax();
    let options = {};
    options.routes = {
      '*all': ajax.ajaxRequest
    };

    super(options);
  }

  initialize() {
    this.bind('route', analytics.trackPageView);
  }

  start() {
    let view = new View();

    // check for old browsers that not support pushstate
    let hasPushState = (
      history.pushState &&
      typeof window.onpopstate !== 'undefined'
    );

    // for old browsers, silent === false, backbone router will trigger the route
    Backbone.history.start({
      pushState: true,
      silent: hasPushState
    });

    // on first load only, bypass router (silent: true), avoid unnecessary ajax request
    if (hasPushState) {
      view.create(null);
    }

    analytics.trackPageView();
  }
}

export default Router;
