const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const path = require("../config/path")
const modul = require("../config/module");
const importcss = require("gulp-cssimport")
const css = () => {
    return src(path.css.src)
        .pipe(concat("main.css"))
        .pipe(importcss())
        .pipe(plumber(modul.error))
        .pipe(dest(path.css.dest))
}
module.exports = css