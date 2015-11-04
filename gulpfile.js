var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var gutil = require('gulp-util');
var requirejs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var http = require('gulp-connect');

var paths = {
	src: 'src',
	build: 'build',
	bower: 'bower_components'
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

gulp.task('assets', function () {
	return gulp.src([
		paths.src + '/**/*.html',
		paths.src + '/**/*.css',
		paths.src + '/**/*.png'
	])
		.pipe(gulp.dest(paths.build));
})

gulp.task('bower', function () {
	return gulp.src([
		paths.bower + "/**/*.js",
		paths.bower + '/**/*.css',

		paths.bower + '/**/*.eot',
		paths.bower + '/**/*.svg',
		paths.bower + '/**/*.ttf',
		paths.bower + '/**/*.woff',
		paths.bower + '/**/*.woff2'
	])
		.pipe(gulp.dest(paths.build + '/bower_components'));
});

gulp.task('build', ['transpile', 'assets', 'bower'], function (done) {
    return requirejs({
		name: "main",
		baseUrl: paths.build,
		out: 'build.js'
	})
	//.pipe(uglify())
        .pipe(gulp.dest(paths.build));
});

gulp.task('rebuild',['clean'], function(){
	gulp.start('build');
});

gulp.task('watch', function () {
    gulp.watch([paths.src + '/**/*'], ['build']);
});

gulp.task('http', function () {
	http.server({
		root: 'build',
		livereload: true
	});
});

gulp.task('default', ['clean'], function () {
	gulp.start(['build', 'assets', 'watch', 'http']);
});