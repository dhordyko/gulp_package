const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const html = require('./tasks/html');
const clear = require('./tasks/clear');
const css = require('./tasks/css');
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
    watch(path.css.watch, css).on("all", browserSync.reload)
}

exports.watcher = watcher
exports.css = css
exports.dev = series(
    clear,
    parallel(css, html),
    parallel(watcher, server)
)
