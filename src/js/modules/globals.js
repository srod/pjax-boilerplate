let globals = {};

/**
 * to see : http://stackoverflow.com/questions/9916073/how-to-load-bootstrapped-models-in-backbone-js-while-using-amd-require-js/10288587#10288587
 */

globals.$html = document.querySelector('html');
globals.$body = document.querySelector('body');
globals.$container = document.getElementById('container');

export default globals;
