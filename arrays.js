var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(element, array) {
  return [element, ...array]


}

function destructivelyAddElementToBeginningOfArray(array, element) {

array[0](element)
return array
}
