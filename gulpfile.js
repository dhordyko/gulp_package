const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const html = require('./tasks/html');
const clear = require('./tasks/clear');
const css = require('./tasks/css');
const sass = require('./tasks/sass');
const javascript= require('./tasks/javascript');
const image= require('./tasks/img');
const fonts= require('./tasks/fonts');
const path = require("./config/path");
const modul = require("./config/module")
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.html.dest
        }
    })
}

const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload)
    watch(path.sass.watch, sass).on("all", browserSync.reload)
    watch(path.js.watch, javascript).on("all", browserSync.reload)
    watch(path.img.watch, image).on("all", browserSync.reload)
    watch(path.fonts.watch, fonts).on("all", browserSync.reload)
}
const build =series(
    clear,
    parallel(sass,javascript, image, fonts, html)
);
const dev =series(
    build,
    parallel(watcher, server)
);


exports.watcher = watcher;
exports.css = css;
exports.sass = sass;
exports.clear = clear;
exports.javascript = javascript;
exports.image = image;
exports.fonts = fonts;
exports.default = modul.isProd? build : dev;

