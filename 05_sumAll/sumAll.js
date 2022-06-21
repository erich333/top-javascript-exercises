const sumAll = function(startNum, endNum) {
    if(startNum < 0 || endNum < 0) {
        return 'ERROR';
    }

    if(typeof startNum != 'number' || typeof endNum != 'number') {
        return 'ERROR';
    }
    
    if(startNum > endNum) {
        let swapVar = endNum;
        endNum = startNum;
        startNum = swapVar;
    }

    let sum = 0;
    for(let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
