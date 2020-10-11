const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(Array.isArray(members)){
    let resArr = members.filter(function (elem){
      return typeof elem === 'string' && elem !== null;
    });

let newArr = resArr.map(elem => elem.trim().charAt(0).toUpperCase());
  
    
    return newArr.sort().join('');
  }
  else return false;
}
