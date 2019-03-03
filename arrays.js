var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(element, array) {

  newArray = [element ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {

array[0] = "element"
return array

}
