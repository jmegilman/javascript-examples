/**
 * Revealing Module Pattern
 * Imitating private functions/fields by keeping them out
 * of scope
 * This example is taken from "Refactoring JavaScript" p116
 * by Evan Burchard. The closure formed when the IIFE is assigned
 * to diary means key and secret are available from within diary
 *
 * @return {Object} Publicly exposed fields/methods
 */

// diary only has access to what's returned by the immediately invoked function expression (IIFE)
const diary = (function () {
  const key = 12345;
  const secrets = "how to win friends/influence people is for psychopaths";

  function privateUnlock(keyAttempt) {
    if (key === keyAttempt) {
      console.log("unlocked");
      this.open = true;
    } else {
      console.log("no");
    }
  }

  function privateTryLock(keyAttempt) {
    // without bind, privateUnlock's this will be the global scope
    privateUnlock.bind(this)(keyAttempt);
  }

  function privateRead() {
    if (this.open) {
      console.log(secrets);
    } else {
      console.log("no");
    }
  }

  // returning only fields/functions that should be public
  // privateUnlock cannot be accessed by diary.privateUnlock()
  return {
    open: false,
    read: privateRead,
    tryLock: privateTryLock,
  };
})();

diary.tryLock(12345); // unlocked
diary.read(); // how to win friends/influence people is for psychopaths
// diary.privateUnlock(12345); // TypeError: diary.privateUnlock is not a function

/* ---------------------------------------------------------- */

/**
 * Revealing Module Pattern
 * This example is from https://gomakethings.com/public-vs.-private-functions-in-javascript/ by Chris Ferdinandi
 *
 * @return {Object} Object with exposed method
 */

var beNice = (function () {
  "use strict";

  // Public methods will get added to this object
  var publicAPIs = {};

  // A private method
  var saySomethingNice = function (somethingNice) {
    console.log(somethingNice);
  };

  // A public method
  publicAPIs.smile = function (message) {
    if (message) {
      saySomethingNice(message);
    } else {
      saySomethingNice("You make the world better just by being you!");
    }
  };

  // Return our public methods so that they can be accessed
  return publicAPIs;
})();

beNice.smile(); // You make the world better just by being you!
beNice.saySomethingNice(); // TypeError: beNice.saySomethingNice is not a function
