/**
 * Array.some()
 *
 * Tests elements in an array and returns true or false
 * If false the iteration ends which is handy if you only
 * need to know if one element meets the test
 */

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const isEven = (element) => {
  console.log(element);
  return element % 2 == 0;
};

const result = array.some(isEven); // 1 2
console.log(result); // true

// This is simliar to ...
console.log(array.find(isEven));
// ... which returns the value where the expression was truthy
