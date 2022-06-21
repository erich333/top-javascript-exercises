const palindromes = function (str) {
    strippedStr = str.replace(/\W/g, '').toLowerCase();
    reversedStr = strippedStr.split('').reverse().join('');
    return strippedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
