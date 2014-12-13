define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  return Backbone.View.extend({

    el: '#container',

    initialize: function(json) {
      console.log('in view page1', json);

      if (json && json.html) {
        this.$el.html(json.html);
      }
    }
  });
});