// numbers
let orderQuantity = -1;
if (orderQuantity < 0) {
  console.log("Numbers: -1");
  console.log("Error - cannot order a negative number: " + orderQuantity);
}

// string represented numbers, aka, type coercion - JS will try to
// convert one of the operands to make the comparison make sense
let quantity = "-2";
if (quantity < 0) {
  console.log("\nString representation of numbers: '-2'");
  console.log("Error - cannot order a negative number: " + quantity);
}

// Not a number, but a string
let qty = "-3a";
if (qty < 0) {
  console.log("Error - cannot order a negative number: " + qty);
}
console.log("\n-3a will not show the error, as it is not a number!");
