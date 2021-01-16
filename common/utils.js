const fs = require('fs')
const path = require('path')

function mkdir(pathname) {
    //console.log(pathname);
    if (fs.existsSync(pathname)) {
        return;
    }

    let parent = path.dirname(pathname);
    if (!fs.existsSync(parent)) {
        console.log('mkdir parent', parent);
        mkdir(parent);
    }
    fs.mkdirSync(pathname);
}


module.exports = {
    mkdir
};