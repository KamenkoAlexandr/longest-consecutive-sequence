module.exports = function longestConsecutiveLength(array) {
  //bad solution, first version  
  function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    function find(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) return i;
        }
        return -1;
    }
    var array2 = [];
    for (var j = 0; j < array.length; j++) {
        if (find(array2, array[j]) === -1) {
            array2.push(array[j]);
        }
    }
    array2.sort(compareNumeric);
    var k = 1, max = 0;
    for (var i = 0; i < array2.length; i++) {
        if (array2[i] === array2[i+1]-1) k++;
        else {
            max = Math.max(k, max);
            k = 1;
        }
    }
    return max;
};
