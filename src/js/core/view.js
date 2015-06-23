/*
define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var Utils = require('modules/utils');
  var Globals = require('modules/globals');
  var $ = require('jquery');
  var current;

  var bindLinks = function bindLinks($a) {
    if (Backbone.history) {
      $a.on('click', function(e) {
        e.preventDefault();

        var href = this.pathname + this.search;

        Backbone.history.navigate(href, true);
      });
    }
  };

  // bind all links with pjax data attribute
  bindLinks($('a[data-pjax]'));

  var create = function createView(json) {
    json = json || {};

    // set title document
    if (json.title) {
      document.title = json.title;
    }

    if (json.html) {
      // go to top
      window.scrollTo(0, 0);

      // empty old content
      Globals.$container.empty();

      // append new content
      Utils.append(Globals.$container[0], json.html);

      // bind all links with pjax data attribute
      bindLinks(Globals.$container.find('a[data-pjax]'));
    }

    // require view and initialize
    // we must have a html tag with data-view="myviewname"
    var view = $('<div>' + (json.html || Globals.$body.html()) + '</div>').find('[data-view]:eq(0)').data('view');

    if (view) {
      require([view], function requireViewCallback(V) {
        // if a view exist, destroy it
        if (current) {
          destroy(current);
        }

        current = new V(json);
      });
    } else {
      throw new Error('Please provide a view name !');
    }
  };

  var destroy = function destroy(view) {
    if (view.unbind) {
      view.unbind();
    }

    view.undelegateEvents();

    view.$el.removeData().unbind();

    // remove view from DOM
    //        view.remove();
    //        Backbone.View.prototype.remove.call(view);
  };

  return {
    create: create
  };
});*/
