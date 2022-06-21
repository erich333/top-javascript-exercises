const repeatString = function(inputString, repetitions) {
    if(repetitions < 0) {
        return 'ERROR';
    }
    
    let outputString = '';
    for(let i = 1; i <= repetitions; i++) {
        outputString = outputString.concat(inputString);
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
