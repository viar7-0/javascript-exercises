const repeatString = function(word,num) {
    if(num<0){
        return 'ERROR'
    }
    let full =''
    for (let i=0;i<num;i++){
        full+=word

    }
    return full

};

// Do not edit below this line
module.exports = repeatString;
