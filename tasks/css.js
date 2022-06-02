const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const path = require("../config/path")
const modul = require("../config/module");
const importcss = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const shorthand = require("gulp-shorthand");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const media = require("gulp-group-css-media-queries"); 
const webpCss =  require("gulp-webp-css");
const css = () => {
    return src(path.css.src, {sourcemaps:modul.isDev})
        .pipe(concat("main.css"))
        .pipe(importcss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(webpCss())
        .pipe(media())
        .pipe(dest(path.css.dest, {sourcemaps:modul.isDev}))
        .pipe(rename({suffix:".min"}))
        .pipe(csso())
        .pipe(dest(path.css.dest, {sourcemaps:modul.isDev}))
}
module.exports = css