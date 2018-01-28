    /*  Returns a random member. Expecting an Array
     *  @param arg An array
     *  @return Random member*/
    const randomMember = (arg) => {
        return arg[~~(Math.random() * (arg.length-1))];
    };

    /*  Returns a random number within given range. Expecting two numbers
     *  @param min Number or String number
     *  @param max Number or String number
     *  @return A random number between the minimum and maximum range*/
    const randomBetween = (min, max) => {    
        if (typeof min === 'string') {
            min = parseInt(min);
        }

        if (typeof max === 'string') {
            max = parseInt(max);
        }

        return ~~(Math.random() * (max-min)) + min;
    };

module.exports = {
    'member': (function(){
        return function(arg) {
            return randomMember(arg);
        }
    })(),
    'between': (function(){
        return function(arg1, arg2) {
            return randomBetween(arg1, arg2);
        }
    })()
};