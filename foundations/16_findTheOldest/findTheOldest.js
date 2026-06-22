const findTheOldest = function(people) {
    const person = people.sort((a,b) => {
        adod =a.yearOfDeath
        if(adod==undefined) {adod=(new Date()).getFullYear()}
        bdod =b.yearOfDeath
        if(bdod==undefined){bdod=(new Date()).getFullYear()}
        return (adod-a.yearOfBirth)>(bdod - b.yearOfBirth) ?-1:1
    }
    )
    return person[0]

};

// Do not edit below this line
module.exports = findTheOldest;
