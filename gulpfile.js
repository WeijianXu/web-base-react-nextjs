const gulp = require('gulp'),
  less = require('gulp-less'),
  concatCss = require('gulp-concat-css');

const srcDir = './',
  distDir = './';
const Dir = {
  lessDir: [srcDir + 'components/**/*.less', distDir + '/static/styles/'],
}

// 编译less文件
gulp.task('styles', () => {
  gulp.src([distDir + '/static/less/**/*.less', Dir.lessDir[0]])
    .pipe(less())
    .pipe(gulp.dest(Dir.lessDir[1]))
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest(Dir.lessDir[1]));
});

gulp.task('default', ['styles']);