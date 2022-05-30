const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const path = require("../config/path");
const imagemin = require("gulp-imagemin");
const webp= require("gulp-webp");
const newer = require("gulp-newer");
const modul = require("../config/module");
const img = () => {
    return src(path.img.src)
        .pipe(plumber(modul.error))
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(dest(path.img.dest))
        .pipe(imagemin({verbose:true}))
        .pipe(dest(path.img.dest))
}
module.exports = img;