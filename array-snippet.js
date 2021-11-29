/**
 * * Checking If an Object Is an Array
 */

const browserNames = ["Firefox", "Edge", "Chrome", "IE", "Safari"];
if (Array.isArray(browserNames)) {
  // We end up here, because browserNames is a valid array.
}

/**
 * * Iterating Over All the Elements in an Array
 */

const animals = ["elephant", "tiger", "lion", "zebra", "cat", "dog", "rabbit"];
for (const animal of animals) {
  console.log(animal);
}

// In modern js
const animals = ["elephant", "tiger", "lion", "zebra", "cat", "dog", "rabbit"];
animals.forEach(function (animal, index, array) {
  console.log(animal);
});

/**
 * * Other ways to iterate over all the elements
 */
//Change every array element - use map() -> Transforming Every Element of an Array
//See if all elements meet a specific condition - use every() -> Validating Array Content
//See if at least one element meets a specific condition - use some() -> Validating Array Content
//Find array elements matching your criteria - use filter() -> Extracting Array Items That Meet Specific Criteria
//Reorder an array - use sort() -> “Sorting an Array of Objects by a Property Value
//Use all the values of an array in one calculation - use reduce() ->“Combining an Array’s Values in a Single Calculation

/**
 * * Checking If Two Arrays Are Equal
 */

function areArraysEqual(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    // These objects are null, undeclared, or non-array objects return false;
  } else if (arrayA === arrayB) {
    // Shortcut: they're two references pointing to the same array return true;
  } else if (arrayA.length !== arrayB.length) {
    // They can't match if they have a different item count return false;
  } else {
    // Time to look closer at each item
    for (let i = 0; i < arrayA.length; ++i) {
      // We require items to have the same content and be the same type,
      // but you could use loosely typed equality depending on your task
      if (arrayA[i] !== arrayB[i]) return false;
    }
    return true;
  }
}

//Now you can check that two arrays are the same, like this:
const fruitNamesA = ["apple", "kumquat", "grapefruit", "kiwi"];
const fruitNamesB = ["apple", "kumquat", "grapefruit", "kiwi"];
const fruitNamesC = ["avocado", "squash", "red pepper", "cucumber"];
console.log(areArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(areArraysEqual(fruitNamesA, fruitNamesC)); // false

//You can compare after sorting the arrays using sort() 
const fruitNamesA = ['apple', 'kumquat', 'grapefruit', 'kiwi']; 
const fruitNamesB = ['kumquat', 'kiwi', 'grapefruit', 'apple']; 
console.log(areArraysEqual(fruitNamesA.sort(), fruitNamesB.sort())); // true


/**
 * * Breaking Down an Array into Separate Variables
 */

 const stateValues = [459, 144, 96, 34, 0, 14]; 
 const [arizona, missouri, idaho, nebraska, texas, minnesota] = stateValues; 
 console.log(missouri); // 144


 /**
  * * Passing an Array to a Function That Expects a List of Values
  */

  const numbers = [2, 42, 5, 304, 1, 13]; 
  // This syntax is not allowed. The result is NaN. 
  const maximumFail = Math.max(numbers); 
  // But this works, thanks to the spread operator. (The answer is 304.) 
  const maximum = Math.max(...numbers);


  /**
   * * Cloning an Array
   */

   const numbers = [2, 42, 5, 304, 1, 13]; 
   const numbersCopy = [...numbers]; 
  // An equally good approach is to use the  Array.slice() method with no arguments, which tells it to take a slice of the entire array: 
   const numbers = [2, 42, 5, 304, 1, 13]; 
   const numbersCopy = numbers.slice(); 
   //Both of these approaches are preferable to looping over array elements and building up a new array by hand.

//But if your array holds objects, these techniques copy the reference, not the entire object. As a result, your new array will have references
// pointing to the same objects. Change one of the objects in the copied array, and it also affects the original array: 

const objectsOriginal = [{name: 'Sadie', age: 12}, {name: 'Patrick', age: 18}]; 
const objectsCopy = [...objectsOriginal]; 
// Change one of the people objects in objectsCopy 
objectsCopy[0].age = 14; 
// Investigate the same object in objectsOriginal 
console.log(objectsOriginal[0].age); // 14

//Here is the solution to the problem 

const objectsOriginal = [{name: 'Sadie', age: 12}, {name: 'Patrick', age: 18}];
// Create a new array with copied objects 
const objectsCopy = objectsOriginal.map( element => ({...element}) ); 
// Change one of the people objects in objectsCopy 
objectsCopy[0].age = 14; 
// Investigate the same object in objectsOriginal 
console.log(objectsOriginal[0].age); // 12