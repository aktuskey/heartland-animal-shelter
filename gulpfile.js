const gulp = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const series = require('run-sequence')

const paths = {
  del: [
    'public/main.css'
  ],
  styles: {
    src: 'styles/**/*.scss',
    dest: 'public'
  }
}

// CSS
gulp.task('styles', () =>
  gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
)

gulp.task('styles:watch', ['styles'], () =>
  gulp.watch(paths.styles.src, ['styles'])
)

// Build & Watch
gulp.task('clean', () => del(paths.del))
gulp.task('build', ['styles'])
gulp.task('watch', ['styles:watch'])

// Dev & Default
gulp.task('dev', (done) => series('clean', 'watch', done))
gulp.task('default', (done) => series('clean', 'build', done))