const fibonacci = function(num) {
    
    let fb =[]
    fb[0] =1;
    fb[1] =1
    for(let i=2;i<num;i++){
        fb[i] =fb[i-1] +fb[i-2]
    }
    if(num<0) return "OOPS"

    if(num==0) return 0
    return fb[num-1]

};

// Do not edit below this line
module.exports = fibonacci;
