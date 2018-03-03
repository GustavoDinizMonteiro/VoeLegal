const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const templateCache = require('gulp-angular-templatecache');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const concatCss = require('gulp-concat-css');

gulp.task('angular', () => {
    gulp.src([
      './app/**/*.js',    
    ])
    .pipe(concat('dist.bundle.min.js'))
    .pipe(babel({
        presets: ['es2015'],
        plugins: ['angularjs-annotate']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('template', () => {
    return gulp.src([
      'app/components/**/*.html'
    ])
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(templateCache({ root: 'components', module: 'zona-azul' }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('sass', () => {
    return gulp.src('./app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('vendor', () => {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-messages/angular-messages.min.js',
        'node_modules/angular-material/angular-material.min.js'
      ])
      .pipe(concat('vendors.js'))
      .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch(['./app/**/*.js'], ['angular']);
    gulp.watch(['./app/**/*.scss'], ['sass']);
});

gulp.task('dev', ['template','angular', 'sass', 'vendor', 'watch']);
gulp.task('default', ['template', 'angular', 'sass', 'vendor']);