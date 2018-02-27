module.exports = function longestConsecutiveLength(array) {
    let set = new Set(array);
    let k = 1, max = 0;
    for (let value of set) {
        if (set.has(value + 1)) k++;
        else {
            max = Math.max(k, max);
            k = 1;
        }
        max = Math.max(k, max)
    }
    return max;
};
