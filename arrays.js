var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(element, array) {

const newArray = [element, ...array]
return newArray


}

function destructivelyAddElementToBeginningOfArray(array, element) {

array.unshift(element)
return array

}


function addElementToEndOfArray(array, element) {

  const newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {

  array.push(element)
  return array


}

function accessElementInArray(array, index) {
  console.log(array[index])


}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {

  array.shift(element)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

