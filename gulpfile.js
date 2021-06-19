var gulp = require('gulp');
var postcss = require('gulp-postcss');
var clean = require('gulp-clean-css');
var uncss = require('postcss-uncss');

gulp.task('default', function () {
  var plugins = [
    uncss({
      html: ['web/**/*.html']
    })
  ];
  return gulp.src(['src/**/*.css'])
    .pipe(clean({compatibility: 'ie11'}))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./web/css'));
});
