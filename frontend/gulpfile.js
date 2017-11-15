var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('build:sass', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    })).on('error', sass.logError)
    .pipe(gulp.dest('../public/css/'));
});
