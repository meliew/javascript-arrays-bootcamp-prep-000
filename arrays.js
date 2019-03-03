var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(element, array) {
  return [element, ...array]


}

function destructivelyAddElementToBeginningOfArray(array, element) {

  return array[0](element)
}
