const gulp = require('gulp');

gulp.task('watch', ['build'], function() {
  gulp.watch('./src/js/**/*', ['build']);
});