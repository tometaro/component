var gulp = require('gulp');
var sass = require('gulp-sass');
browserSync = require('browser-sync');

//ブラウザー開く
gulp.task("browser-sync", function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

//変更があれば自動でリロードする
gulp.task('bs-reload', function () {
    browserSync.reload();
});

//sassコンパイル
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//タスク監視
gulp.task('default', ['browser-sync'], function () {
  browserSync.init({
    files: ['./**/*.php'],
    proxy: 'http://tome.dev',
  });
  // gulp.watch('./**/*.php', ['bs-reload']);
  gulp.watch('./sass/**/*.scss', ['sass','bs-reload']);
});
