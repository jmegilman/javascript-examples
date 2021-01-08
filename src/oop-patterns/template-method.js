/* Template Method Pattern
 *
 * This example is from Refactoring JavaScript - https://refactoringjs.com/
 *
 * For when you have two algorithms that serve the same purpose
 * with minor variations
 *
 * The log function is in the parent class
 * with subclasses having their own implementations
 *
 * So there's one call to the log() function with different
 * outputs depending on the subclass implementation
 *
 */

class Person {
  log(number) {
    return this.whatIs(number);
  }
}

class BinaryKnower extends Person {
  whatIs(number) {
    return new Number("0b" + number);
  }
}

class BinaryOblivious extends Person {
  whatIs(number) {
    return number;
  }
}

module.exports = {
  BinaryKnower,
  BinaryOblivious,
};
