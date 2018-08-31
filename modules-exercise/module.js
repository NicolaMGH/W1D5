var sortList = require("./creating-and-exporting")

sortList.numToList(36)
sortList.numToList(5)
sortList.numToList(7)
sortList.numToList(8)
sortList.numToList(5675)
sortList.numToList(98)
sortList.numToList(5)

var sortedList = sortList.sorted()

console.log(sortedList)