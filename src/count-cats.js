
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  var cat = '^^';
  var count = 0;
  var flat = [].concat.apply([], matrix);
  
  for(var i=0;i<flat.length; i++){
     if(flat[i] == cat)
     count += 1;
  } 
  return count;
};
