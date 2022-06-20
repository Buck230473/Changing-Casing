// Create a var that stores the name that the user enters via prompt
// Capitalise the first letter of their name


var name = prompt("What is your name?");

// Isolate the first char
var firstChar = name.slice(0,1);

// Turn the first character to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

// Isolate the rest of the name
var restOfName = name.slice(1, name.length);

// Change rest of the name to lowercase
restOfName = restOfName.toLowerCase();

// Concatenate the first char with the rest of the character
var capitalisedName = upperCaseFirstChar + restOfName;

// We use the capitalised version of their name to greet them using an alert.
alert("Hello, " + capitalisedName);
