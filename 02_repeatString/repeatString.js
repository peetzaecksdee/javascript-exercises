const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    tempString = "";
    for (let i = 0; i < num; i++) {
        tempString += string;
    }
    return tempString
};

// Do not edit below this line
module.exports = repeatString;
