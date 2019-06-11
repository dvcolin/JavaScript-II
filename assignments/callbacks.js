// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

const cbLog =  (item) => console.log(item);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, cbLog);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, cbLog);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  cb(sum);
}

sumNums(5, 8, cbLog);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let result = x * y;
  cb(result);
}

multiplyNums(5, 8, cbLog);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  list.includes(item) ? cb(true) : cb(false);
}

contains('Notebook', items, cbLog);
contains('Eraser', items, cbLog);

/* STRETCH PROBLEM */

const duplicates = ['Xbox', 'PS4', 'Xbox', 'PC', 'Switch', 'PS4', 'Xbox'];


function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  let noDuplicates = array.filter(function(item, index, inputArray) {
    return inputArray.indexOf(item) === index;
  });
  
  cb(noDuplicates);
}

removeDuplicates(duplicates, cbLog);

////// (4) ["Xbox", "PS4", "PC", "Switch"]