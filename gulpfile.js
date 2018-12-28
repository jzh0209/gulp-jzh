var gulp = require('gulp');

var sass = require('gulp-sass');

var server = require('gulp-webserver');

// var clean = require('gulp-clean-css');

// var uglify = require('gulp-uglify');

// var htmlmin = require('gulp-htmlmin');

//编译scss
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        // .pipe(clean())
        .pipe(gulp.dest('./src/css'))
})

//起服务
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8989,
        }))
})

//监听scss
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'))
})

//开发环境
gulp.task('dev', gulp.series('sass', 'server', 'watch'))

//压缩js
// gulp.task('bUglify', function() {
//     return gulp.src(['./src/js/*.js', '!./src/js/*.min.js'])
//         .pipe(uglify())
//         .pipe(gulp.dest('./build/js'))
// })

//压缩html
// gulp.task('bHtmlmin', function() {
//     return gulp.src('./src/**/*.html')
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest('./build'))
// })