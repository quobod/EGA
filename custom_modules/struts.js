const uuid = require('uuid');
const chalk = require('chalk');

const dash = (arg) => {
    return arg.match('-');
};

const space = (arg) => {
    return arg.match(' ');
};

const underscore = (arg) => {
    return arg.match('_');
};

const validArg = (arg) => {
    return null !== arg && undefined !== arg && (typeof arg === 'string' && arg.length > 0);
};

const capitalizeFirstCharacter = (arg, character = null) => {
    if (null === character) {
        return arg.substring(0, 1).toUpperCase();
    } else {
        let newWord = '';
        const argSplit = arg.split(character);
        for (let i = 0; i < argSplit.length; i++) {
            let line = argSplit[i];
            if (i < (argSplit.length - 1)) {
                newWord += line.substring(0, 1).toUpperCase() + line.substring(1) + ' ';
            } else {
                newWord += line.substring(0, 1).toUpperCase() + line.substring(1);
            }
        }
        return newWord;
    }
};

const cfc = (arg) => {
    if (validArg(arg)) {
        if (null !== dash(arg)) {
            return capitalizeFirstCharacter(arg, '-');
        } else if (null !== space(arg)) {
            return capitalizeFirstCharacter(arg, ' ');
        } else if (null !== underscore(arg)) {
            return capitalizeFirstCharacter(arg, '_');
        } else {
            return capitalizeFirstCharacter(arg);
        }
    } else {
        return null;
    }
};

module.exports = {
    'dash': (function(){
        return function(arg) {
            return dash(arg);
        }
    })(),
    'space': (function(){
        return function(arg) {
            return space(arg);
        }
    })(),
    'underscore': (function(){
        return function(arg) {
            return underscore(arg);
        }
    })(),
    'cfc': (function(){
        return function(arg) {
            return cfc(arg);
        }
    })()
}