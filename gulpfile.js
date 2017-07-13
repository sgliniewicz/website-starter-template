// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create(),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/'
  }
;

//Watch Task
gulp.task('watch',[ 'browserSync', 'sass' ], function(){
  gulp.watch(folder.src + 'scss/**/*.scss', ['sass']);
  gulp.watch(folder.src + '*.html', browserSync.reload); 
  gulp.watch(folder.src + 'js/**/*.js', browserSync.reload); 
  // Other watchers
})

// Convert Scss Task
gulp.task('sass', function(){
  return gulp.src(folder.src +'scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest( folder.src + '/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


//Browser-sync Task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})