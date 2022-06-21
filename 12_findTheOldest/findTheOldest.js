const findTheOldest = function(people) {
    return people.reduce( (lastPerson, currentPerson) => {
        return findAge(lastPerson) > findAge(currentPerson) ?
            lastPerson : currentPerson;
    })

};

const findAge = function(person) {
    let endYear;
    if(typeof person.yearOfDeath === 'undefined') {
        endYear = Number(Date().split(' ')[3]);
    } else {
        endYear = person.yearOfDeath;
    }
    return endYear - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
