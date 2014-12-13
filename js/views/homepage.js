define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  return Backbone.View.extend({

    el: '#container',

    initialize: function(json) {
      console.log('in view homepage', json);

      if (json && json.html) {
        this.$el.html(json.html);
      }
    }
  });
});