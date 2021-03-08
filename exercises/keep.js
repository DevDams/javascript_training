'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(str) {
    return str.split(str[2])[0]
}

function keepLast(str) {
    return str.split(str[str.length - 3])[1]
}

function keepFirstLast(str) {
    let wrld = str.split(str[2])
    return wrld[1].split(wrld[1][2])[0]
}



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')

assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepFirstLast.length, 1)

assert.deepStrictEqual(keepFirst('dream'), 'dr')
assert.deepStrictEqual(keepFirst('traveler'), 'tr')
assert.deepStrictEqual(keepFirst('agence'), 'ag')

assert.deepStrictEqual(keepLast('dream'), 'am')
assert.deepStrictEqual(keepLast('traveler'), 'er')
assert.deepStrictEqual(keepLast('agence'), 'ce')

assert.deepStrictEqual(keepFirstLast('dream'), 'am')
assert.deepStrictEqual(keepFirstLast('traveler'), 've')
assert.deepStrictEqual(keepFirstLast('agence'), 'nc')
// assert.fail('You must write your own tests')
// End of tests */
