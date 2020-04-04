const gulp = require('gulp');
const uglifycss = require('gulp-uglifycss');
// const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
var exec = require('child_process').exec;
const imagemin = require('gulp-imagemin');
var del = require('del');

gulp.task('minify-css', () => {
	return gulp
		.src('./src/styles/main/*.css')
		.pipe(
			autoprefixer({
				overrideBrowserslist: [ 'last 2 versions' ]
			})
		)
		.pipe(
			uglifycss({
				uglifyComments: true
			})
		)
		.pipe(gulp.dest('./dist/styles/'));
});

// Compiles SCSS To CSS
// gulp.task(
//     'styles',
//     gulp.series(() => {
//         return gulp
//             .src('src/styles/sass/**/*.scss')
//             .pipe(
//                 sass({
//                     outputStyle: 'compressed'
//                 }).on('error', sass.logError)
//             )
//             .pipe(
//                 autoprefixer({
//                     browsers: ['last 2 versions']
//                 })
//             )
//             .pipe(gulp.dest('./dist/styles/sass'))
//             .pipe(browserSync.stream());
//     })
// );

// // Use Webpack to compile latest Javascript to ES5
// // Webpack on Development Mode
gulp.task(
	'webpack:dev',
	gulp.series((cb) => {
		return exec('npm run dev:webpack', function(err, stdout, stderr) {
			console.log(stdout);
			console.log(stderr);
			cb(err);
		});
	})
);

// Webpack on Production Mode
gulp.task(
	'webpack:prod',
	gulp.series((cb) => {
		return exec('npm run build:webpack', function(err, stdout, stderr) {
			console.log(stdout);
			console.log(stderr);
			cb(err);
		});
	})
);

// Browser-sync to get live reload and sync with mobile devices
gulp.task(
	'browser-sync',
	gulp.series(function() {
		browserSync.init({
			server: './src',
			notify: false,
			open: true //change this to true if you want the broser to open automatically
		});
	})
);

// // Use Browser Sync With Any Type Of Backend
// gulp.task(
// 	'browser-sync-proxy',
// 	gulp.series(function() {
// 		// THIS IS FOR SITUATIONS WHEN YOU HAVE ANOTHER SERVER RUNNING
// 		browserSync.init({
// 			proxy: {
// 				target: 'http://localhost:3333/', // can be [virtual host, sub-directory, localhost ///with port]
// 				ws: true // enables websockets
// 			}
// 			// serveStatic: ['.', './public']
// 		});
// 	})
// );

// // Minimify/Compress Your Images
gulp.task('imagemin', () => {
	return gulp
		.src('src/assets/images/*')
		.pipe(
			imagemin([
				imagemin.gifsicle({
					interlaced: true
				}),
				imagemin.jpegtran({
					progressive: true
				}),
				imagemin.optipng({
					optimizationLevel: 5
				}),
				imagemin.svgo({
					plugins: [
						{
							removeViewBox: true
						},
						{
							cleanupIDs: false
						}
					]
				})
			])
		)
		.pipe(gulp.dest('./dist/assets/images'));
});

// // This is your Default Gulp task
gulp.task(
	'default',
	gulp.parallel([
		gulp.series([
			'webpack:dev',
			'minify-css',
			function runningWatch() {
				gulp.watch('./src/styles/**/*', gulp.parallel('minify-css'));
				gulp.watch('./src/scripts/main/**/*', gulp.parallel('webpack:dev'));
				gulp.watch([ './src/**/*', './src/*' ]).on('change', reload);
			}
		]),
		gulp.series([ 'browser-sync' ])
	])
);

// // This is the task when running on a backend like PHP, PYTHON, GO, etc..
// gulp.task(
// 	'watch-proxy',
// 	gulp.parallel([
// 		gulp.series([
// 			'webpack:dev',
// 			'styles',
// 			function runningWatch() {
// 				gulp.watch('./src/styles/**/*', gulp.parallel('styles'));
// 				gulp.watch('./src/scripts/js/**/*', gulp.parallel('webpack:dev'));
// 				gulp.watch([ './src/**/*', './public/*' ]).on('change', reload);
// 			}
// 		]),
// 		gulp.series([ 'browser-sync-proxy' ])
// 	])
// );

// // This is the production build for your app
gulp.task('build', gulp.series([ gulp.parallel([ 'minify-css', 'webpack:prod' ]) ]));

// // Delete Your Temp Files
gulp.task(
	'cleanTemp',
	gulp.series(() => {
		return del([
			'./temp'

			//   '!public/img/**/*'
		]);
	})
);

// // Tasks to generate site on development this will also have live reload
// gulp.task(
// 	'static-dev',
// 	gulp.parallel([
// 		gulp.series([
// 			'views',
// 			'webpack:dev',
// 			'styles',
// 			'cleanTemp',
// 			function runningWatch() {
// 				gulp.watch('./src/scripts/components/**/*', gulp.series('views'));
// 				gulp.watch('./src/scripts/components/**/*', gulp.series('cleanTemp'));
// 				gulp.watch('./src/styles/**/*', gulp.parallel('styles'));
// 				gulp.watch('./src/scripts/main/**/*', gulp.parallel('webpack:dev'));
// 				gulp.watch([ './src/**/*', './src/*' ]).on('change', reload);
// 			}
// 		]),
// 		gulp.series([ 'browser-sync' ])
// 	])
// );

// // this will run your static site for production
// gulp.task(
// 	'static-build',
// 	gulp.series([ gulp.series([ 'views', 'cleanTemp' ]), gulp.parallel([ 'styles', 'webpack:prod' ]) ])
// );
