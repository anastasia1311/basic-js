const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   const newArr = [];
   var arrSize = arr.length;
   if(arrSize === 0) return [];
  if(!Array.isArray(arr)){
    throw new Error('Invalid data');
  } 
  for (let i = 0; i < arrSize; i++){
   if(arr[i] === '--discard-next'){
     i++;
   }
   else if(arr[i] === '--discard-prev'){
       newArr.pop();
   }
   else if(arr[i] === '--double-next'){
       if(i !== arr.length - 1){
       newArr.push(arr[i+1]);
       }}
   else if((arr[i] == '--double-prev') ){
    if (i > 0){
      newArr.push(arr[i-1]);   
    }
   }
 else newArr.push(arr[i]);
   } 
   return newArr;
};
