const notify = require("gulp-notify");
const error = {
    errorHandler: notify.onError(error => ({
        title: "HTML",
        message: error.message
    }))

}

module.exports = error;