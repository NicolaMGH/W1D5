//could put the data here so the function has data to refrence
var data = require('./myData')
// var data = [{
//   //array of objects
//   "name": "John Wick", "sex": "M", "Father": "Steve Wick"
// }]



function findFather (name) {
  for (var i=0; i < data.length; i++){
    if (name === data[i].name){
      console.log(data[i])
      return data[i].father;

    }
  }
}


function findGrandFather(name){
  return findFather(findFather(name))
}

module.exports = {
  findPa: findFather,
  findGrandPa: findGrandFather
}