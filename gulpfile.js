const { src, dest, series, watch } = require("gulp");
const plugins = require('gulp-load-plugins')();
const ghPages = require('gulp-gh-pages');
const htmlmin = require('gulp-htmlmin');

const publish = () => {
  return src('./_book/**/*')
    .pipe(ghPages({
      origin: 'origin',
      branch: 'gh-pages'
    }));
};

const minify = () => {
  return src('./_book/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./_book/'));
}
const push = series(minify, publish);
module.exports = {
  minify,
  push,
  publish
}
// gulp.task('publish', () => {
//   return gulp.src('./_book/**/*')
//     .pipe(plugins.ghPages({
//       origin: 'origin',
//       branch: 'gh-pages'
//     }));
// });