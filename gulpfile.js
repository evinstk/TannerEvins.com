const gulp       = require('gulp')
const browserify = require('browserify')
const babelify   = require('babelify')
const source     = require('vinyl-source-stream')
const buffer     = require('vinyl-buffer')
const sourcemaps = require('gulp-sourcemaps')
const es         = require('event-stream')
const gutil      = require('gulp-util')
const sass       = require('gulp-sass')
const uglify     = require('gulp-uglify')
const process    = require('process')

gulp.task('default', () => {
  const files = [
    'app.js'
  ]

  let tasks = files.map(entry => {
    const b = browserify({
      entries: './src/' + entry,
      debug: true,
      transform: [
        babelify.configure({
          presets: ['es2015', 'react']
        })
      ]
    })

    return b.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source(entry))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(process.env.NODE_ENV === 'production' ? uglify() : gutil.noop())
      .on('error', gutil.log)
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public/'))
  })

  es.merge.apply(null, tasks)
})

gulp.task('sass', () => {
  return gulp.src('./scss/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('watch-all', () => {
  gulp.watch([
    'src/routes.js',
    'src/app.js',
    'src/containers/*.js',
    'src/components/*.js',
    'src/reducers/*.js',
    'src/store/*.js'
  ], ['default'])
  gulp.watch('./scss/**/*.scss', ['sass']);
});
