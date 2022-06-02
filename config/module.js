const isProd = process.argv.includes("--production");
const isDev=!isProd;
const notify = require("gulp-notify");
const error = {
    errorHandler: notify.onError(error => ({
        title: "HTML",
        message: error.message
    }))

}
const webpack = {
    mode: isProd? "production" : "development"
}

module.exports = error;
module.exports = webpack;
module.exports ={
    isDev:isDev,
    isProd:isProd
}