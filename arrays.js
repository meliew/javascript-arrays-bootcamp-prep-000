var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {

[...array, "element"]
return array

}
addElementToBeginningOfArray(chocolateBars, "baby ruth");

function destructivelyAddElementToBeginningOfArray(array, element) {
  array[0](element)
  return array

}
destructivelyAddElementToBeginningOfArray(chocolateBars, "hersheys")
