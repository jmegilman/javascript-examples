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
  (customer && customer.address && customer.address.country) ||
  "Unknown country";
console.log(customerCountry); // Unknown country
