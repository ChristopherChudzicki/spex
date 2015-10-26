/**
 * @name PromiseAdapter
 * @summary Adapter for the primary promise operations.
 * @description
 * Provides compatibility with promise libraries that are not $[Promises/A+] compliant,
 * via functions that implement the primary operations with promises:
 *
 *  - construct a new promise with a callback function
 *  - resolve a promise with some result data
 *  - reject a promise with a reason
 *
 * #### Example
 *
 * Below is an example of setting up a client-side adapter for AngularJS $q.
 * Please note that AngularJS 1.4.1 or later no longer requires a promise adapter.
 *
 * ```js
 * var spexLib = require('spex');
 *
 * var adapter = new spexLib.PromiseAdapter(
 *    function (cb) {
 *        return $q(cb); // creating a new promise;
 *    }, function (data) {
 *        return $q.when(data); // resolving a promise;
 *    }, function (reason) {
 *        return $q.reject(reason); // rejecting a promise;
 *    });
 *
 * var spex = spexLib(adapter);
 * ```
 *
 * @param {Function} create
 * A function that takes a callback parameter and returns a new promise object.
 * The callback parameter is expected to be `function(resolve, reject)`.
 *
 * Passing in anything other than a function will throw `Adapter requires a function to create a promise.`
 *
 * @param {Function} resolve
 * A function that takes an optional data parameter and resolves a promise with it.
 *
 * Passing in anything other than a function will throw `Adapter requires a function to resolve a promise.`
 *
 * @param {Function} reject
 * A function that takes an optional error parameter and rejects a promise with it.
 *
 * Passing in anything other than a function will throw `Adapter requires a function to reject a promise.`
 *
 * @see $[module]
 */
function PromiseAdapter(create, resolve, reject) {

    this.create = create;
    this.resolve = resolve;
    this.reject = reject;

    if (typeof create !== 'function') {
        throw new TypeError('Adapter requires a function to create a promise.');
    }

    if (typeof resolve !== 'function') {
        throw new TypeError('Adapter requires a function to resolve a promise.');
    }

    if (typeof reject !== 'function') {
        throw new TypeError('Adapter requires a function to reject a promise.');
    }
}

module.exports = PromiseAdapter;