const sumAll = function (starts, end) {
    if (typeof(end) !== "number" || end < 0 || starts < 0 || isNaN(starts)) {
        return "ERROR";
    }
    let result = 0;
    if (end < starts) {
        for (; end <= starts; end++) {
            result += end;
        }
        return result;
    }
    for (; starts <= end; starts++) {
        result += starts;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
