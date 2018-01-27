const assert = require('assert');
const chalk = require('chalk');
const log = require('../custom_modules/log');
const struts = require('../custom_modules/struts');
	
log('\n\t\tModule Struts Test Cases\n');

// Testing the dash function
describe(chalk.green('Dash function test'), () => {
    describe(chalk.yellow('Testing 5 strings for the dash character'), () => {
        it('should return 2 positives and 3 negative matches', () => {
            const args = ['to-prevent-this', 'in_prepared_testimony_in', 'with-both_your-counter-parts', 'are there no go zones', 'surely_I_saw'];
            assert.notEqual(null, struts.dash(args[0]));
            assert.equal(null, struts.dash(args[1]));
            assert.notEqual(null, struts.dash(args[2]));
            assert.equal(null, struts.dash(args[3]));
            assert.equal(null, struts.dash(args[4]));
        });
    });
});

// Testing the single space function
describe(chalk.green('Space function test'), () => {
    describe(chalk.yellow('Testing 5 strings for any single space characters'), () => {
        it('should return 1 positive and 4 negatives matches', () => {
            const args = ['to-prevent-this', 'in_prepared_testimony_in', 'with-both_your-counter-parts', 'are there no_go-zones, has not', 'surely_I_saw'];
            assert.equal(null, struts.space(args[0]));
            assert.equal(null, struts.space(args[1]));
            assert.equal(null, struts.space(args[2]));
            assert.notEqual(null, struts.space(args[3]));
            assert.equal(null, struts.space(args[4]));
        });
    });
});

// Testing the underscore function
describe(chalk.green('Underscore function test'), () => {
    describe(chalk.yellow('Testing 5 strings for any underscore characters'), () => {
        it('should return 4 positives and 1 negative matches', () => {
            const args = ['to-prevent-this', 'in_prepared_testimony_in', 'with-both_your-counter-parts', 'are there no_go-zones, has not', 'surely_I_saw'];
            assert.equal(null, struts.underscore(args[0]));
            assert.notEqual(null, struts.underscore(args[1]));
            assert.notEqual(null, struts.underscore(args[2]));
            assert.notEqual(null, struts.underscore(args[3]));
            assert.notEqual(null, struts.underscore(args[4]));
        });
    });
});

// Testing the cfc function
describe(chalk.green('Cfc function test'), () => {
    describe(chalk.yellow('Testing 5 strings for with underscore, single space and dashes'), () => {
        it('should return all strings with first character of each word in caps', () => {
            const args = ['to-prevent-this', 'in_prepared_testimony_in', 'with-both-your-counter-parts', 'are_there_no_go_zones', 'has not', 'surely_I_saw'];
            assert.notEqual(null, struts.cfc(args[0]));
            assert.notEqual(null, struts.cfc(args[1]));
            assert.notEqual(null, struts.cfc(args[2]));
            assert.notEqual(null, struts.cfc(args[3]));
            assert.notEqual(null, struts.cfc(args[4]));
            args.map(arg => {
                log(struts.cfc(arg));
            });
        });
    });
});