const sumAll = function(lowerBound,highBound) {
    if(!(Number.isInteger(lowerBound) && Number.isInteger(highBound))){
        return "ERROR"
    }
    if(!(lowerBound>=0 && highBound>=0)){
        return "ERROR"
    }
     if(lowerBound>highBound){
        let q = highBound
        highBound = lowerBound
        lowerBound = q
     }
   
    let sum =0
    for(let i=lowerBound;i<=highBound;i++){
        sum+=i;
    }
    return sum


};

// Do not edit below this line
module.exports = sumAll;
