//if data stays here, it will throw an array that 'data' is not defined because the function in family-module doesnt have any data to refrence
/*var data = [{
  //array of objects
}]*/


// function findFather (name) {
//   for (var i=0; i < data.length; i++){
//     if (name === data[i].name){
//       return data[i].father;
//     }
//   }
// }


var family = require('./familyModule')

//should return name of father
console.log(family.findPa("John Wick"))

console.log(family.findGrandPa("John Wick"))






