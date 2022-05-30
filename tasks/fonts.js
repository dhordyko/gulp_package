const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const path = require("../config/path");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const modul = require("../config/module");
const fonts = () => {
    return src(path.fonts.src)
        .pipe(plumber(modul.error))
        .pipe(newer(path.fonts.dest))
        .pipe(fonter({formats:["ttf","eot","woff","svg"]}))
        .pipe(dest(path.fonts.dest))
}
module.exports = fonts;