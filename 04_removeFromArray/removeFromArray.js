const removeFromArray = function(array, ...things) {
    for (const thing of things) {
        const pos = array.indexOf(thing);
        if (pos > -1) {
            array.splice(pos, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
