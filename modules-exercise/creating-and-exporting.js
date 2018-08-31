module.exports = {
  arr: [],
  numToList: function(num){
    this.arr.push(num)
  },
  sorted: sorted,

}

function sorted (){
  return this.arr.sort(function(a,b){
    return a - b;
  })
}
