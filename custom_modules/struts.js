const uuid = require('uuid');
const chalk = require('chalk');


module.exports = {
    'cfc': (function(){
        return function(word) {
            return cfc(word);
        }
    })()
}