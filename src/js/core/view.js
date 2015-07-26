import globals from '../modules/globals';
import utils from '../modules/utils';
import Homepage from '../views/homepage';
import Page1 from '../views/page1';
import Page2 from '../views/page2';

class View {
  constructor() {
    console.log('view init');

    this.current = null;
    this.homepage = new Homepage();
    this.page1 = new Page1();
    this.page2 = new Page2();

    // bind all links with pjax data attribute
    this.bindLinks($('a[data-pjax]'));
  }

  bindLinks($a) {
    if (Backbone.history) {
      $a.on('click', function(e) {
        e.preventDefault();

        var href = this.pathname + this.search;

        Backbone.history.navigate(href, true);
      });
    }
  }

  create(json) {
    json = json || {};

    // set title document
    if (json.title) {
      document.title = json.title;
    }

    if (json.html) {
      // go to top
      window.scrollTo(0, 0);

      // empty old content
      globals.$container.empty();

      // append new content
      utils.append(globals.$container[0], json.html);

      // bind all links with pjax data attribute
      this.bindLinks(globals.$container.find('a[data-pjax]'));
    }

    // require view and initialize
    // we must have a html tag with data-view="myviewname"
    var view = $('<div>' + (json.html || globals.$body.html()) + '</div>').find('[data-view]:eq(0)').data('view');

    if (view) {
      if (this.current) {
        this.destroy(this.current);
      }

      this.current = this[view];
      this[view].start(json);

      /*require([view], function requireViewCallback(V) {
        // if a view exist, destroy it
        if (this.current) {
          this.destroy(this.current);
        }

        this.current = new V(json);
      });*/
    } else {
      throw new Error('Please provide a view name !');
    }
  }

  destroy(view) {
    if (view.unbind) {
      view.unbind();
    }

    view.undelegateEvents();

    view.$el.removeData().unbind();

    // remove view from DOM
    //        view.remove();
    //        Backbone.View.prototype.remove.call(view);
  }
}

export default View;
