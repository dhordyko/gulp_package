const del = require("del");
const path = require("../config/path");
const clear = async () => {
    if(path.html.dest)
    del(path.html.dest)
    return; 
}
module.exports = clear