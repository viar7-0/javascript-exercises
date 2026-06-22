const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
  return a-b
	
};

const sum = function(arr) {
  return arr.reduce((sum,p) => sum+p,0)
	
};

const multiply = function(arr) {
  return arr.reduce((sum,p) => sum*p,1)
	

};

const power = function(a,b) {
  return a**b
	
};

const factorial = function(num) {
  let p=1
  for(let i=1;i<=num;i++){
    p*=i
  }
  return p
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
