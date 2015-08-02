import globals from '../modules/globals';
import utils from '../modules/utils';

class View {
  constructor() {
    console.log('core === View constructor');

    this.current = null;

    // bind all links with pjax data attribute
    this.bindLinks(document.querySelectorAll('a[data-pjax]'));
  }

  bindLinks(tagsA) {
    if (Backbone.history) {
      let doBind = (a) => {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          let href = e.target.pathname + e.target.search;
          Backbone.history.navigate(href, true);
        }, false);
      };
      [].forEach.call(tagsA, doBind);
    }
  }

  create(json) {
    if (this.current) {
      this.destroy(this.current);
      this.current = null;
    }

    json = json || {};

    // set title document
    if (json.title) {
      document.title = json.title;
    }

    if (json.html) {
      // go to top
      window.scrollTo(0, 0);

      // empty old content
      while (globals.container.firstChild) {
        globals.container.removeChild(globals.container.firstChild);
      }

      // append new content
      utils.append(globals.container, json.html);

      // bind all links with pjax data attribute
      this.bindLinks(globals.container.querySelectorAll('a[data-pjax]'));
    }

    // require view and initialize
    // we must have a html tag with data-view="myviewname"
    var view = globals.body.querySelector('[data-view]')
      .getAttribute('data-view');

    if (view) {
      require('bundle!../views/' + view + '.js')(function(V) {
        this.current = new V();
        this.current.start(json);
      }.bind(this));
    } else {
      throw new Error('Please provide a view name !');
    }
  }

  destroy(view) {
    if (view.unbind) {
      view.unbind();
    }

    view.undelegateEvents();

    //view.el.removeData().unbind();

    // remove view from DOM
    //view.remove();
    //Backbone.NativeView.prototype.remove.call(view);
  }
}

export default View;
