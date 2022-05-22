const del = require("del");
const path = require("../config/path");
const clear = async () => {
    del(path.html.dest)
}
module.exports = clear