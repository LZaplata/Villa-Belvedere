let {src, dest, watch, parallel} = require("gulp");
let sass = require("gulp-sass");
let minify = require("gulp-clean-css");
let themeDir = "./themes/lzaplata-villabelvedere";

function sassTask() {
    return src(themeDir + "/assets/sass/theme.sass")
        .pipe(sass({outputStyle: "compressed", includePaths: ["./node_modules"]}))
        .pipe(dest(themeDir + "/assets/css"));
}

function cssTask() {
    return src([
        "node_modules/bootstrap-icons/font/bootstrap-icons.css",
        "node_modules/swiper/swiper-bundle.css",
        "node_modules/mc-datepicker/dist/mc-calendar.min.css",
    ])
        .pipe(minify())
        .pipe(dest(themeDir + "/assets/css"))
}

function fontsTask() {
    return src("node_modules/bootstrap-icons/font/fonts/*")
        .pipe(dest(themeDir + "/assets/css/fonts"))
}

function jsTask() {
    return src([
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "node_modules/@popperjs/core/dist/umd/popper.js",
        "node_modules/swiper/swiper-bundle.js",
        "node_modules/mc-datepicker/dist/mc-calendar.min.js",
    ])
        .pipe(dest(themeDir + "/assets/js"))
}

function watchTask() {
    watch([
        themeDir + "/assets/**/theme.sass",
        themeDir + "/assets/**/_variables.sass",
    ], {ignoreInitial: false}, sassTask);
}

exports.default = parallel(sassTask, cssTask, fontsTask, jsTask);
exports.watch = watchTask;
