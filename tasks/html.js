const { src, dest } = require("gulp");
const fileInclude = require("gulp-file-include");
const plumber = require("gulp-plumber");
const webp= require("gulp-webp-html");
const path = require("../config/path");
const modul = require("../config/module");
const html = () => {
    return src(path.html.src)
        .pipe(plumber(modul.error))
        .pipe(fileInclude())
        .pipe(webp())
        .pipe(dest(path.html.dest))
}
module.exports = html;