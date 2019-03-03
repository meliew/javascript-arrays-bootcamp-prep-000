var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {

array.unshift(element)
return array

}
addElementToBeginningOfArray(chocolateBars, "baby ruth");

function destructivelyAddElementToBeginningOfArray(array, element) {
  array[1](element)
  return array

}
destructivelyAddElementToBeginningOfArray(chocolateBars, "hersheys")
