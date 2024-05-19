// Destructuring means to get or extract desired information from an array or an object, where multiple information is kept.
// Destructuring makes the code clean.
//It helps to make code readable.
//It provides faciility to a developer to extract desired information from various collection of data.
//Destructuring can be applied to an array as well as an object.

//DESTRUCTURING IN ARRAY.
//syntax :- let[]=name of array

let onsite_Student:(string|number|boolean)[]=["Huma Mohsin","GEN AI","Governor House",234567,"Karachi"]
//traditional way to access values from an array , by using index.
console.log("Values at Index 2:",onsite_Student[2]);// shows output as :Governor House
console.log("Values at Index 4:",onsite_Student[4]);// shows output as :Karachi
//Typescript supports destructing, it is the way to extract information .
let [StudentName, courses, Center, RollNO, City] = onsite_Student;//using ddestructuring syntax
//Extracted desired values by means of destructuring.
console.log("Student Name:" , StudentName);
console.log("Registration Number:" , RollNO);
console.log("Center:" , Center);
//Author-Huma Mohsin