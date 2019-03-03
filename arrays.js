var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(element, array) {

const newArray = [element, ...array]
return newArray


}

function destructivelyAddElementToBeginningOfArray(array, element) {

array[0] = element

}


function addElementToEndOfArray(array, element) {


}

function destructivelyAddElementToEndOfArray(array, element) {

  array.push("element")


}
