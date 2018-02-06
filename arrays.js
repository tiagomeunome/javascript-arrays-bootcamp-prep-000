var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  
  addElementToBeginningOfArray(array, el){
    var newArr = new Array();
    newArr = [el...array.slice(0)];
  }
  
  destructivelyAddElementToBeginningOfArray(array, el){
    array[0] = el;
  }