const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const html = require('./tasks/html');
const clear = require('./tasks/clear');
const css = require('./tasks/css');
const sass = require('./tasks/sass');
const path = require("./config/path")
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
}

exports.watcher = watcher
exports.css = css
exports.sass = sass
exports.dev = series(
    clear,
    parallel(sass, html),
    parallel(watcher, server)
)
