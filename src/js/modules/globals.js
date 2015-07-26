let globals = {};

/**
 * to see : http://stackoverflow.com/questions/9916073/how-to-load-bootstrapped-models-in-backbone-js-while-using-amd-require-js/10288587#10288587
 */

globals.$html = $('html');
globals.$body = $('body');
globals.$container = $('#container');

//console.log(globals.$html[0]);
//console.log(globals.$body[0]);
//console.log(globals.$container[0]);

export default globals;
