const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', (done) => {
  gulp.src('features/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/'), { sourcemaps: true })
    done();
});



gulp.task('build', gulp.parallel('babel'));
