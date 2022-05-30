const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const path = require("../config/path");
const modul = require("../config/module");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const webpack = require("webpack-stream");
const js = () => {
    return src(path.js.src)
        .pipe(plumber(modul.error))
        .pipe(babel())
        .pipe(webpack({
            mode: "development"
        }))
        .pipe(uglify())
        .pipe(dest(path.js.dest))
}
module.exports = js