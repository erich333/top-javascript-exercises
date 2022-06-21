const removeFromArray = function(inputArray) {
    const valuesToRemove = [];
    for(let i = 1; i < arguments.length; i++) {
        valuesToRemove.push(arguments[i]);
    }
    return inputArray.filter(element =>
         !valuesToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
