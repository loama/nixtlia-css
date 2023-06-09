const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Task to reload the browser
gulp.task('reload', function (done) {
  browserSync.reload();
  done();
});

// Task to serve the project with Browsersync
gulp.task('serve', function () {
  browserSync.init({
    proxy: 'http://localhost:3000', // Change the proxy URL to match your backend server URL
    serveStatic: ['./'],
    middleware: [
      function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    ]
  });

  // Watch for changes in HTML and CSS files
  gulp.watch(['*.html', '*.css'], gulp.series('reload'));
});
