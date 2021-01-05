// Block scopes
{
  something = "something"; // assigned to the global scope
  console.log(something); // something
}
console.log(something); // something

{
  var someVar = "someVar"; // assigned to the global scope
  console.log(someVar); // someVar
}
console.log(someVar); // someVar

{
  const someConst = "someConst";
  console.log(someConst); // someConst
}
console.log(someConst); // Reference Error: someConst is not defined

{
  let someLet = "someLet";
  console.log(someLet); // someLet
}
console.log(someLet); // Reference Error: someLet is not defined

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
console.log(myFunctionVar); // ReferenceError: myFunctionVar is not defined
