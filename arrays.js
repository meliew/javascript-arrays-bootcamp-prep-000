var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(element, array) {
  return [element, ...array]


}

function destructivelyAddElementToBeginningOfArray(array, element) {

array.unshift("element")

}


function addElementToEndOfArray(array,'foo') {

const array = [1]
array1 = array.unshift('foo')
return array1

}

function destructivelyAddElementToEndOfArray(array, element) {

  array.push("element")


}
