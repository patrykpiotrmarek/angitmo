var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var gutil = require('gulp-util');
var requirejs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var server = require('gulp-express');


var paths = {
	src: 'src',
	build: 'build'
};

gulp.task('clean', function () {
	return gulp.src(paths.build, { read: false })
		.pipe(clean({ force: true }))//clean build folder
		.on('error', gutil.log)
		;
});

gulp.task('transpile', function () {
    return gulp.src([paths.src + '/**/*.js'])
		.pipe(babel({
			modules: "amd"
		}))
		.pipe(gulp.dest(paths.build));
});

gulp.task('html', function () {
	return gulp.src([paths.src + '/**/*.html'])
		.pipe(gulp.dest(paths.build));
})

gulp.task('build', ['transpile', 'html'], function (done) {
    return requirejs({
		name: "bootstrap",
		baseUrl: paths.build,
		out: 'build.js'
	})
        .pipe(uglify())
        .pipe(gulp.dest(paths.build));
});

gulp.task('server', function () {
    return server.run({
        file: 'app.js'
    });
});
