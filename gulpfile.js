const { src, dest, series, watch } = require("gulp");
const plugins = require('gulp-load-plugins')();
const ghPages = require('gulp-gh-pages');
const htmlmin = require('gulp-htmlmin');

const deploy = () => {
  return src('./_book/**/*')
    .pipe(ghPages());
};

const minify = () => {
  return src('./_book/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./_book/'));
}
const build = series(minify, deploy);
module.exports = {
  minify,
  deploy,
  build,
}
// gulp.task('publish', () => {
//   return gulp.src('./_book/**/*')
//     .pipe(plugins.ghPages({
//       origin: 'origin',
//       branch: 'gh-pages'
//     }));
// });