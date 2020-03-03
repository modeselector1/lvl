const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const minifyCSS = require('gulp-minify-css');

function minicss () {
  return gulp.src('src/css/*.css')
      .pipe(minifyCSS())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('dist/css'))
}

function watch () {
  browserSync.init({
    server: {
      baseDir: './src/'
    }
  })
  gulp.watch('./src/css/*.css').on('change', browserSync.reload);
  gulp.watch('./src/*.html').on('change', browserSync.reload);
}

exports.watch = watch;
exports.minicss = minicss;