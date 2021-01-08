let customer = {
  name: "Geoff",
};

/* Optional chaining (?.) will return undefined if a
 * property doesn't exist
 *
 * The nullish coalescing operator (??) takes the right
 * hand side operand if the left is null or undefined
 *
 */
const customerCity = customer?.address?.city ?? "Unknown city";
console.log(customerCity); // Unknown city

/* Alternatively, you'd have to check if each property existed first */
const customerCountry =
  (customer && customer.address && customer.address.country) ??
  "Unknown country";
console.log(customerCountry); // Unknown country

/* Nullish coalescing operator only returns the right hand operand for undefined and null, not falsey values */
const testNullish = 0 ?? "Right Hand Operand";
console.log(testNullish); // 0
