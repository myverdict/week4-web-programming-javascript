/*** BASIC VARIABLES ***/
console.log("BASIC VARIABLES");
console.log("---------------");

// Number variables: integer and floating point numbers are stored in the same way
let quantity = 6;                           // integer 
let price = 123.45;                         // floating point 

// String variables: use single or double quotes
let hello = 'hello world';                  // single quote string 
let moreText = "double quotes are ok too";  // double quote string 

// Boolean variables: true and false are keywords
let easyMode = true;
let isJavaTheSameAsJavaScript = false;

// can define variable, and then initialize later
let car;                                    // variable definition
car = 'toyota';                             // variable initialization


/*** PRINT TO CONSOLE ***/

// console.log prints to the terminal or developer console if running in a browser
console.log("Integer variable: ");
console.log(quantity);      // 6
console.log();

console.log("Floating-point variable: ");
console.log(price);         // 123.45
console.log();

console.log("String variable in single quotes: ");
console.log(hello);         // hello world
console.log();

console.log("String variable in double quotes: ");
console.log(moreText);      // double quotes are ok too
console.log();

console.log("Boolean variables: ");
console.log("Easy mode? " + easyMode);                                          // Easy mode? true
console.log("Is Java the same as JavaScript? " + isJavaTheSameAsJavaScript);    // Is Java the same as JavaScript? false
console.log();

console.log("******************************************");


/*** REINITIALIZING VARIABLES ***/
console.log("\nREINITIALIZING VARIABLES");
console.log("------------------------");

let information = 'coffee';     // initialized as a string
console.log("Variable initialized with a string: ");
console.log(information);       // coffee
console.log();

information = 1234;             // turns into an integer
console.log("Variable reinitialized with an integer: ");
console.log(information);       // 1234

// JS is cool with this, but avoid in code, often leads to bugs
console.log("\nWARNING: JS is cool with this, but avoid in code, often leads to bugs");
console.log();

console.log("******************************************");


/*** TYPE COERCION ***/
console.log("\nTYPE COERCION");
console.log("-------------");

let data = 10;
console.log("String concatenated with 2 numbers: ");
console.log('data plus 1 is ' + data + 1);  // data coerced into a string 'Data plus 1 is 101'
console.log();

console.log("2 numbers concatenated with a string: Arithmetic calculation is performed first");
console.log(data + 1 + ' is data plus 1');  // compare to output of this:  '11 is data plus 1'
console.log();

let string_number = '123';
let times_two = string_number * 2;          // string_number is coerced to a numerical value
console.log("A numerical string multiplied by a number: Arithmetic calculation performed successfully");
console.log(times_two);                     // 246
console.log();

let pet = "cat";
let cat_times_two = pet * 2;
console.log("A non-numerical string multiplied by a number: Cannot make sense of this");
console.log(cat_times_two);                 // Can't make sense of this - NaN
console.log();

console.log("******************************************");


/*** STRINGS ***/
console.log("\nSTRINGS");
console.log("-------");

let text = 'hello world';

let stringLength = text.length;     // length is a property --> 11

let shout = text.toUpperCase();     // These are methods - convert to uppercase

let whisper = text.toLowerCase();   // convert to lowercase

let whereIsW = text.indexOf('w');   // index of first matching character or -1 if not found --> 6

let whereIsZ = text.indexOf('z');   // index of first matching character or -1 if not found --> -1

let whisperAndShout = whisper.concat(shout);    // join strings together

let replaceO = text.replace('o', '0');      // Replace the first instance of first thing with second thing
// See reference for more info on this, can also do global
// and more complex replacements with regular expressions

let replaceAllO = text.replace(/o/g, '0');  // Replace the all instance of first thing with second thing

let textWithWhiteSpace = "    4 spaces behind & tab at the end\t";
let removeWhitespace = textWithWhiteSpace.trim();         // Remove spaces, tabs, newlines etc. from both ends of the string

console.log("String length: ");
console.log(stringLength);
console.log();

console.log("String uppercase: ");
console.log(shout);
console.log();

console.log("String lowercase: ");
console.log(whisper);
console.log();

console.log("Index of 'W': ");
console.log(whereIsW);
console.log();

console.log("Index of 'Z': ");
console.log(whereIsZ);
console.log();

console.log("Concat strings: ");
console.log(whisperAndShout);
console.log();

console.log("Replace 'o' with '0': ");
console.log(replaceO);
console.log();

console.log("Replace all 'o' with '0': ");
console.log(replaceAllO);
console.log();

console.log("Original text with white space: '" + textWithWhiteSpace + "'");
console.log("Removed white space by trimming: ");
console.log(removeWhitespace);
console.log();

console.log("******************************************");


/*** STRING FORMATTING WITH TEMPLATE STRINGS ***/
console.log("\nSTRING FORMATTING WITH TEMPLATE STRINGS");
console.log("---------------------------------------");

// Use backticks, not regular quotes
// Put a variable or expression in ${ } and it will be evaluated and inserted into the string
let lions = 4;
let tigers = 7;
let tigerPattern = 'striped';

console.log("Template string with placeholder: ");
console.log(`There are ${lions} lions.`);                   // "There are 4 lions"
console.log();

console.log("Template string with arithmetic perfomed inside a placeholder using 2 integer variables: ");
console.log(`There are ${lions + tigers} big cats.`);        // "There are 11 big cats"
console.log();

console.log("Template string with multiple placeholders: ");
console.log(`All ${tigers} tigers are ${tigerPattern}.`);    // "All 7 tigers are striped"
console.log();

console.log("******************************************");


/*** ARRAY CREATION, ACCESS ***/
console.log("\nARRAY CREATION AND ACCESS");
console.log("-------------------------");

// Array variable (like a list in Python)
let quiz_scores = [100, 78, 93, 81, 100, 99];
console.log("Integer array: ");
console.log(quiz_scores);
console.log();

// Another array. Can mix types if needed
let my_array = [5, 6, 'cake', 1234.124, text];
console.log("Mixed array: has integers, strings, floating-point numbers");
console.log(my_array);          // [ 5, 6, 'cake', 1234.124, 'hello world' ]
console.log();

// Read individual elements
console.log("Reading individual elements from mixed array: ");
console.log("1st index 0 of mixed array: ");
console.log(my_array[0]);       // Array indexes start at 0. This prints 5
console.log("3rd index 2 of mixed array: ");
console.log(my_array[2]);       // Prints 'cake'
console.log("Non-existing index -10 of mixed array: ");
console.log(my_array[-10]);     // non-existent index: this prints 'undefined'
console.log("Non-existing index 10 of mixed array: ");
console.log(my_array[10]);      // non-existent index: this prints 'undefined'
console.log();

// Can modify elements by index
my_array[2] = "pizza";
console.log("Modified mixed array: replaced 3rd index 2 of mixed array (from 'cake' to 'pizza') ");
console.log(my_array);          // [ 5, 6, 'pizza', 1234.124, 'hello world' ]
console.log();

console.log("******************************************");


/*** OBJECTS ***/
console.log("\nOBJECTS");
console.log("-------");

// A simple object (key: value pair). More on this later
let productQuantities = { 'android': 5, 'iphone': 3 };
console.log("A simple object, 'key: value' pair: ");
console.log(productQuantities);
console.log();

// Two ways to access things in an object
console.log("2 ways to access things in an object: using dot notation or square brackets: ");
console.log(productQuantities.android);     // Dot notation, if you know the key
console.log(productQuantities['android']);  // or square brackets, if the key is from a variable
console.log();

console.log("******************************************");


/*** ==, ===, IF, IF-ELSE ***/
console.log("\n==, ===, IF, IF-ELSE");
console.log("--------------------");

// Note that == and != work for comparisons,
// but it's recommended to use === and !== instead
console.log("== & === demonstration: ");
let grade = 100;

console.log("Triple equals: integer === integer ");
if (grade === 100) {
    console.log('You aced the quiz!');
}
console.log();

console.log("Double equals: integer == numerical string ");
if (grade == '100') {
    console.log('The number 100 is the SAME as the string "100" with double equals ==');
}
console.log();

console.log("Triple equals: integer === numerical string ");
if (grade === '100') {
    console.log('This will not be printed');
}
else {
    console.log('The number 100 is NOT SAME as the string "100" with triple equals ===');
}
console.log();

/* if statement */
console.log("if statement: ");
let orderQuantity = -1;
if (orderQuantity < 0) {
    console.log('Error - cannot order a negative number');
}
console.log();

/* if else statements */
console.log("if-else statement: ");
let animal = 'zebra';
if (animal === 'zebra') {
    console.log('This animal is a zebra');
}
else {
    console.log('Not a zebra');
}
console.log();

console.log("if-else with arrays: ");
let cities = ['London', 'Paris', 'Berlin'];
// array.indexOf(var) returns -1 if element not found
// If 'Minneapolis' is not in the array, then add (push) it to the end of the array
if (cities.indexOf('Minneapolis') === -1) {
    cities.push('Minneapolis');
}
else {
    console.log('Minneapolis is in the array of cities');
}
console.log(cities);
console.log();

console.log("******************************************");


/*** &&, ||, ! operators ***/
console.log("\n&&, ||, ! operators");
console.log("-------------------");

// && represents logical AND
// used to check if two or more conditions are both true
console.log("Logical AND: && operator");
let itemPrice = 100;
if (itemPrice === 100 && orderQuantity > 1) {
    console.log('You have ordered at least 1 or more $100 items');
}
else {
    console.log("itemPrice variable was true but orderQuantity variable was false, " + 
                "hence, && if clause not printed.");
}
console.log();

// || represents logical OR
// If at least one of these conditions are true, the whole expression is true
console.log("Logical OR: || operator");
let newCustomer = true;
let haveEmail = false;

if (newCustomer === true || haveEmail === false) {
    console.log('Need to request customer\'s email');
}
console.log();

// More concise version. ! reverses the truth of a value.
console.log("NOT: ! operator");
if (newCustomer || !haveEmail) {
    console.log('Need to request customer\'s email');
}
console.log();

console.log("If-else-if statement: ");
console.log('Animal guesser: Based on the number of legs a creature has, I ' + 
            'will try to guess what it is.');
let legs = 4;       // Animal guesser: Pretend this is user input 

if (legs < 0) {
    console.log('I don\'t think anything has a negative number of legs');
}
else if (legs % 2 !== 0) {
    console.log('An odd number of legs, are you sure?');
}
else if (legs === 0) {
    console.log('Is it a snake?');
}
else if (legs === 2) {
    console.log('A biped animal, such as a human?');
}
else if (legs === 4) {
    console.log('A quadruped, like a zebra?');
}
else if (legs === 6) {
    console.log('Probably an insect, like a bee?');
}
else if (legs === 8) {
    console.log('Possibly a spider?');
}
else {
    console.log('More than 8 legs - perhaps a millipede?');
}
console.log();

console.log("== and ===");
// Why === and == ?
let number_5 = 5;
let string_5 = '5';

// == double equals operator
console.log(number_5 == string_5);      // True
// Types are coerced and the string '5' is considered == equal to the number 5

// === triple equals operator
console.log(number_5 === string_5);     // False
// False. Types are NOT coerced, the two operands must be the same type,
// as well as the same value
// The string '5' is NOT considered === equal to the number 5

// != not equals operator
console.log(number_5 != string_5);      // False
// Types are coerced and the string '5' is considered == equal to the number 5
// So checking non-equality between '5' and 5 return false - they are not, not equal 

// !== not equals operator
console.log(number_5 !== string_5);     // True
// False. Types are NOT coerced, the two operands must be the same type,
// as well as the same value. The string '5' is NOT considered === equal to the number 5
console.log();

console.log("******************************************");


/*** LOOPS ***/
console.log("\nLOOPS");
console.log("-----");

// for loop, repeat a certain number of times
console.log("for loop/repeat a certain number of times: ");
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log();

console.log("for loop over a string: ");
let languageName = "JavaScript";
for (let letter = 0; letter < languageName.length; letter++) {
    console.log(languageName[letter]);      // Can refer to characters by string index
}
console.log();


/* A while loop to double a number and display it 
Stop when a number greater than 100 is reached */
console.log("while loop: ");
let maxVal = 100;
let number = 1;
while (number < maxVal) {
    number *= 2;                            // number = number * 2
    console.log('number = ' + number);
}
console.log();

// Infinite loop! Avoid. Scripts that take too long to run or appear to be stuck
// in infinite loops will be killed by the browser.
// while (true) {
//     console.log ('hello');
// }

console.log("******************************************");


/*** LOOPS WITH ARRAYS ***/
console.log("\nLOOPS WITH ARRAYS");
console.log("-----------------");

// loop over an array by counting the elements
// This approach is useful if you need to know where you are in the array
let letters = ['a', 'b', 'c'];
console.log("for loop with arrays: ");
for (let i = 0; i < letters.length; i++) {
    console.log('Element ' + i + ' is ' + letters[i]);
}
console.log();

/* Another way of looping over an array.
More concise if you don't need to know the position of the elements
Notice the function definition in the function call! */
let animals = ['Buffalo', 'Elephant', 'Yak'];
console.log("forEach loop with arrays: ");
animals.forEach(function (element) {
    console.log(element);
})
console.log();

console.log("******************************************");


/*** LOOPS WITH OBJECTS ***/
console.log("\nLOOPS WITH OBJECTS");
console.log("-----------------");

// Loop over all properties in an object
let pc_specs = { 'CPU': '3.0 GHz', 'Memory': '4GB' };

for (let spec in pc_specs) {
    console.log(spec, pc_specs[spec]);      // CPU 3.0 GHz
}                                           // Memory 4GB
console.log();

// The loop above works for a simple object. With more complex objects
// you may have inherited properties that you may wish to exclude. So modify loop as follows
for (let spec in pc_specs) {
    // check that spec is an actual property of this object
    if (pc_specs.hasOwnProperty(spec)) {
        console.log(spec, pc_specs[spec]);
    }
}
console.log();

console.log("******************************************");


/*** ARRAY MANIPULATION ***/
console.log("\nARRAY MANIPULATION");
console.log("------------------");

birds = ['Parrot', 'Chicken', 'Dodo', 'Owl'];
console.log("Original array: ");
console.log(birds);
console.log();

console.log("Replace 2nd array item at index 1: 'Chicken' replaced with 'Eagle'");
birds[1] = 'Eagle';     // replace element 1 with 'Eagle'
console.log(birds);
console.log();

// JS lets you do this. There is no element 5, but 'Sparrow'
// is added at position 5, and undefined elements are added to fill in the gaps.
console.log("Placing a new item 'sparrow' at a new position: empty element is 'undefined'");
birds[5] = 'Sparrow';   
console.log(birds);
console.log();

console.log("Fill in the empty item with 'Jay' in the array: ");
birds[4] = 'Jay';               // Fill in the blank element
console.log(birds);
console.log();

console.log("Reading a copy of data from the array: ");
let firstBird = birds[0];       // Read data: a copy of data from the array
let thirdBird = birds[2];
console.log(firstBird, thirdBird);
console.log();

console.log("Remove the last item from the array with 'pop': 'Sparrow' is removed");
let lastBird = birds.pop();     // Removes last item and returns it
console.log(lastBird, birds);
console.log();

console.log("Add a new item at the end of the array with 'push': 'Seagull' is added");
birds.push('Seagull');          // Push adds new element to end of array
console.log(birds);
console.log();

console.log("Removes the first item from the array with 'shift': 'Parrot' is removed");
firstBird = birds.shift();      // Remove and returns first element
console.log(firstBird, birds);
console.log();

console.log("Add a new item at the start of the array with 'unshift': 'Wren' is added");
birds.unshift('Wren');          // Add element to start of array
console.log(birds);
console.log();


// How many elements in the array?
let numberOfBirds = birds.length;
console.log("Number of elements in the array: use the 'length' property");
console.log(numberOfBirds);
console.log();

// Where is an element in the array? Return index if found, -1 if not
console.log("Find 'Owl' in the array: at index 3");
console.log(birds.indexOf('Owl'));          // 3
console.log();

console.log("Find 'Penguin' in the array: not in the array");
console.log(birds.indexOf('Penguin'));      // -1
console.log();

// Loop over array
console.log("for looping over the array: ");
for (let j = 0; j < birds.length; j++) {
    console.log('Bird ' + j + ' is ' + birds[j]);
}
console.log();

console.log("Reverse the array with 'reverse': ");
birds.reverse();        // Reverse order of elements
console.log(birds);
console.log();

console.log("Ascending order array: ");
birds.sort();           // arrange array in ascending order.
console.log(birds);
console.log();

// How would you sort in descending order?
console.log("Descending order array: ");
birds.reverse();
console.log(birds);
console.log();

// Join all elements into a string, separated by commas
console.log("Join all elements in an array into a string seperated by commas: ");
let allBirds = birds.join();                    
console.log(allBirds);
console.log();

// Join all elements, connected with a custom string
console.log("Join all elements in an array connected with a custom string: ");
let allBirdsWithSeparator = birds.join(' % ');  
console.log(allBirdsWithSeparator);
console.log();

console.log("******************************************");


/*** FUNCTIONS ***/
console.log("\nFUNCTIONS");
console.log("---------");

console.log("=====================");
console.log("add function: ");
function add(a, b) {
    return a + b;
}

let sum = add(1, 2);
console.log(sum);
console.log();
console.log("=====================");

/* A very specific function testing if an array contains 'Owl'
in any case. How could you make this more generally useful? */
function containsOwl(array) {
    let owl = 'owl';

    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() === owl) {
            return true;
        }
    }

    return false;
}

console.log("Example 1: containsOwl function");
exampleArray = ['Plankton', 'Squid', 'Sea Sponge'];
console.log(exampleArray);
console.log(containsOwl(exampleArray));
console.log();

console.log("Example 2: containsOwl function");
exampleArray2 = ['Owl', 'Puffin', 'Eagle'];
console.log(exampleArray2);
console.log(containsOwl(exampleArray2));
console.log();
console.log("=====================");

// JavaScript doesn't care if you use the arguments
// you defined in your function or not.
console.log("do_something function defined with 2 arguments: ");
function do_something(a, b) {
    console.log('do_something function running. It received these arguments:\n' +
                'a: ' + a + ' \nb: ' + b + '\n');

    console.log('Here are all the arguments: ');
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

console.log("Example 1: ");
do_something('hello', 'bye!');      // Who cares about type :)
console.log();

console.log("Example 2: ");
do_something('hello');
console.log();

console.log("Example 3: ");
do_something('hello', 1234, 0.0001, 'bye');
console.log();


console.log("Example 4: ");
do_something(1);
console.log();

console.log("Example 5: ");
do_something(1, 2);
console.log();

console.log("Example 6: ");
do_something(1, 2, 3);
console.log();

console.log("Example 7: ");
do_something(1, 2, 3, 4);
console.log();

console.log("******************************************");