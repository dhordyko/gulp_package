const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const html = require('./tasks/html');
const clear = require('./tasks/clear');
const server = () => {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    })
}
const watcher = () => {
    watch('./src/html/**/*.html', html)
}

exports.watcher = watcher
exports.dev = series(
    clear,
    html,
    parallel(watcher, server)
)
