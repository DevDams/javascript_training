'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(str) {
    return str.replace(str.slice(0, 2), '')
}

function cutLast(str) {
    return str.replace(str.slice((str.length -2)), '')
}

function cutFirstLast(str) {
    return str.slice(2, (str.length - 2))
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirst('dream'), 'eam')
assert.deepStrictEqual(cutFirst('traveler'), 'aveler')
assert.deepStrictEqual(cutFirst('agence'), 'ence')
assert.deepStrictEqual(cutLast('dream'), 'dre')
assert.deepStrictEqual(cutLast('traveler'), 'travel')
assert.deepStrictEqual(cutLast('agence'), 'agen')
assert.deepStrictEqual(cutFirstLast('dream'), 'e')
assert.deepStrictEqual(cutFirstLast('traveler'), 'avel')
assert.deepStrictEqual(cutFirstLast('agence'), 'en')
// assert.fail('You must write your own tests')
// End of tests */
