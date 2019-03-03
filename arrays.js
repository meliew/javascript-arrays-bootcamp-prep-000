var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(element, array) {

const moreCandy = [element, ...array]
return moreCandy


}

function destructivelyAddElementToBeginningOfArray(array, element) {

array.unshift("element")

}


function addElementToEndOfArray(array, element) {


}

function destructivelyAddElementToEndOfArray(array, element) {

  array.push("element")


}
