const minimist = require('minimist')
const lib = require('./base64ify');




module.exports = () => {
    const args = minimist(process.argv.slice(2));
    console.log(lib.base64ify(args._));

};