const { src, dest } = require("gulp");
const path = require("../config/path");
const gsass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const shorthand = require("gulp-shorthand");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const media = require("gulp-group-css-media-queries"); 
var sassGlob = require('gulp-sass-glob');
const sass = () => {
    return src(path.sass.src, {sourcemaps:true})
        .pipe(sassGlob())
        .pipe(gsass())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(media())
        .pipe(dest(path.sass.dest, {sourcemaps:true}))
        .pipe(rename({suffix:".min"}))
        .pipe(csso())
        .pipe(dest(path.sass.dest, {sourcemaps:true}))
}
module.exports = sass;