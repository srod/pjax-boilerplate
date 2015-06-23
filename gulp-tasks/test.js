const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('lint-src', function() {
  return gulp.src(['src/js/**/*.js'])
    .pipe($.plumber())
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError())
    .pipe($.jscs());
    //.pipe($.notify(jscsNotify));
});

gulp.task('test', ['lint-src'], function() {
  // TODO lancer les tests
  //require('babel/register');
  //return gulp.src(['test/setup/node.js', 'test/unit/**/*.js'], {read: false})
  //  .pipe($.mocha({reporter: 'dot', globals: config.mochaGlobals}));
});
