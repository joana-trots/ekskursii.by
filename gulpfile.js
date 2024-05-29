const {src, dest, watch, parallel, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');

const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const svgSprite = require('gulp-svg-sprite');

const include = require('gulp-include');


function pages() {
    return src('app/pages/*.html')
    .pipe(include({
        includePaths: [
            'app/pages/components/**'
        ]
    }))
    .pipe(dest('app'))
    .pipe(browserSync.stream())
}

function images() { 
    return src(['app/images/src/*.*', '!app/images/src/*.svg'])
    .pipe(newer('app/images'))

    .pipe(avif({ quality : 65 }))

    .pipe(src(['app/images/src/*.*']))
    .pipe(newer('app/images'))
    .pipe(webp())

    .pipe(src('app/images/src/*.*'))
    .pipe(newer('app/images'))
    .pipe(imagemin())

    .pipe(dest('app/images'))
}
function sprite() {
    return src('app/images/src/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg',
                example: true
            }
        }
    }))
    .pipe(dest('app/images'))
}
function styles() {
    return src('app/sass/styles.sass')
        .pipe(autoprefixer({ 
            overrideBrowserslist: ['last 10 version']
        }))
        .pipe(sass({ outputStyle: 'expanded' }))
        // compressed
        .pipe(concat('styles.min.css'))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}
function scripts() {
    return src([
        'node_modules/@splidejs/splide/dist/js/splide.min.js',
        'node_modules/flatpickr/dist/flatpickr.min.js',
        'node_modules/flatpickr/dist/l10n/ru.js',
        'node_modules/flatpickr/dist/l10n/be.js',
        '!node_modules/dayjs/dayjs.min.js',
        '!node_modules/dayjs/plugin/isToday.js',
        '!node_modules/dayjs/plugin/isTomorrow.js',
        '!node_modules/dayjs/plugin/isBetween.js',
        '!node_modules/dayjs/plugin/utc.js',
        '!node_modules/dayjs/locale/ru.js',
        '!node_modules/dayjs/locale/be.js',
        
        'app/js/*.js',
        '!app/js/schedule.js',
        '!app/js/main.min.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}
function watching() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
    watch(['app/images/src'], images)
    watch(['app/sass/styles.sass'], styles)
    watch(['app/js/main.js'], scripts)
    watch(['app/components/*', 'app/pages/*'], pages)
    watch(['app/**/*.html']).on('change', browserSync.reload)
}
function building() {
    return src([
        'app/css/styles.min.css',
        'app/images/*.webp',
        '!app/images/*.svg',
        'app/images/sprite.svg',
        '!app/images/stack',
        'app/js/main.min.js',
        'app/**/*.html'
    ], {base: 'app'} )
    .pipe(dest('dist'))
}
function cleanDist() {
    return src('dist')
    .pipe(clean())
}

exports.pages = pages;

exports.sprite = sprite;
exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;

exports.building = building;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, images, sprite, scripts, pages, watching);