/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.sortBy = function(fn) {
    return this.slice().sort((a, b) => fn(a) - fn(b));
};
