var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('uncss', function () {
  return gulp.src([
    'src/styles-srl.css',
    'src/styles-srl.min.css'
  ])
    .pipe(uncss({
      html: ['web/feedback.html']
    }))
    .pipe(gulp.dest('./web/css'));
});

exports.build = uncss;
