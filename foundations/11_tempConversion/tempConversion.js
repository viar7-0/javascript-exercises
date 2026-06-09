const convertToCelsius = function(temp) {
  cTemp = (temp-32)*(5/9)
  let rounded = Math.round(cTemp*10)/10
  return rounded
  
};

const convertToFahrenheit = function(temp) {
  let fTemp = (temp*(9/5)) +32
  let rounded = Math.round(fTemp*10)/10
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
