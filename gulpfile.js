const gulp       = require('gulp')
const browserify = require('browserify')
const babelify   = require('babelify')
const source     = require('vinyl-source-stream')
const buffer     = require('vinyl-buffer')
const sourcemaps = require('gulp-sourcemaps')
const es         = require('event-stream')
const gutil      = require('gulp-util')

gulp.task('default', () => {
    const files = [
        'app.js'
    ]

    var tasks = files.map(entry => {
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
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./public/'))
    })

    es.merge.apply(null, tasks)
})

const watcher = gulp.watch([
	'src/routes.js',
	'src/app.js',
    'src/containers/*.js',
    'src/reducers/*.js',
    'src/store/*.js'
], ['default'])
