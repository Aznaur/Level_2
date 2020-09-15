"use strict";

/* jshint node: true */

const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const server = require('browser-sync').create();
const plumber = require('gulp-plumber');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const del = require('del');
const ghPages = require('gh-pages');
const path = require('path');



function css () {
  return src('source/scss/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([
      autoprefixer()
    ]))
    // .pipe(csso())
    // .pipe(rename('style.min.css'))
    .pipe(sourcemaps.write("."))
    .pipe(dest('source/css/'))
    .pipe(server.stream());
}

function browsersync () {
  server.init({
    server: 'source/',
    notify: false,
    online: true,
    open: true,
    cors: true,
    ui: false
  });

  watch('source/scss/**/*.{scss,sass}', series('css'));
  watch('source/*.html', series(refresh));
}

function images () {
  return src('source/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo()
    ]))

    .pipe(dest('source/img'));
}

function webpImages () {
  return src('source/img/**/*.{png,jpg}')
  .pipe(webp({quality: 75}))
  .pipe(dest('source/img'));
}

function refresh (done) {
  server.reload();
  done();
}

function copy () {
  return src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    'source/js/**',
    "source/**/*.html",
    'source//*.ico'
    ], {
      base: 'source'
    })
    .pipe(dest('build'));
}

function delfile () {
  return del('build');
}

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './build'), cb);
}

exports.deploy = deploy;

exports.browsersync = browsersync;
exports.css = css;
exports.images = images;
exports.webp = webpImages;
exports.copy = copy;
exports.delfile = delfile;
exports.build = series(delfile, copy, css);
exports.start = series(css, browsersync)
