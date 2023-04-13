const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function compileSass(){
    return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('css/'))
}

gulp.task('sass', compileSass);

function pluginsCss(){
    return gulp.src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
}

gulp.task('pluginCss',pluginsCss);

function gulpJs(){
    return  gulp.src('./js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
}

gulp.task('allJs',gulpJs);

function pluginsJs(){
    return gulp
    .src(['js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
}

gulp.task('pluginJs',pluginsJs);

function watch(){
    gulp.watch('scss/*.scss', compileSass);
    gulp.watch('css/lib/*.css', pluginsCss);
    gulp.watch('js/scripts/*js', gulpJs);
    gulp.watch('js/lib/*.js', pluginsJs);
}

gulp.task('watch',watch);

gulp.task('default', gulp.parallel('watch','sass','pluginCss' ,'allJs','pluginJs'));