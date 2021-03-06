// Block scopes
{
  something = "something"; // defined in the global scope
  console.log(something); // something
}
console.log(something); // something

{
  var someVar = "someVar"; // defined in the global scope
  console.log(someVar); // someVar
}
console.log(someVar); // someVar

{
  const someConst = "someConst";
  console.log(someConst); // someConst
}
try {
  console.log(someConst);
} catch (err) {
  console.log(err); // Reference Error: someConst is not defined
}

{
  let someLet = "someLet";
  console.log(someLet); // someLet
}
try {
  console.log(someLet);
} catch (err) {
  console.log(err); // Reference Error: someLet is not defined
}

function myFunc() {
  myFuncNoVarKeyword = "myFuncNoVarKeyword";
  console.log(myFuncNoVarKeyword);
}
myFunc(); // myFuncNoVarKeyword
console.log(myFuncNoVarKeyword); // myFuncNoVarKeyword - but only if the myFunc() has been called, otherwise ReferenceError: myFuncNoVarKeyword is not defined

function myFunction() {
  var myFunctionVar = "myFunctionVar";
  console.log(myFunctionVar);
}
myFunction(); // myFunctionVar
try {
  console.log(myFunctionVar);
} catch (err) {
  console.log(err); // ReferenceError: myFunctionVar is not defined
}

{
  function aFunction() {
    console.log("aFunction");
  }
}
aFunction();
try {
  aFunction();
} catch (err) {
  console.log(err); // ReferenceError: aFunction is not defined
}
