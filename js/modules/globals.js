define(function(require) {
  'use strict';

  var $ = require('jquery');
  var globals = {};

  /**
   * to see : http://stackoverflow.com/questions/9916073/how-to-load-bootstrapped-models-in-backbone-js-while-using-amd-require-js/10288587#10288587
   */

  var initialize = function initialize() {
    globals.$html = $('html');
    globals.$body = $('body');
    globals.$container = $('#container');
  }();

  return globals;
});