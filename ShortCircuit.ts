// Shortcircuit in programming language refers to the behaviour of logical operators.

//Short circuit Theory:-
//If the first condition is false, the second statement is not evaluated, and the entire expression returns false (short-circuiting).
//If the first condition is true, the second statement is evaluated, and the entire expression returns true (short-circuiting).

//Advantage:-
//It improves performance.
//Avoid unnecessary computations.
//Time saving , Memory saving.

//example:
let student="Huma Mohsin";
let IsEnrolled=true;
let IsOnsite=true;
let course="Generative AI";

function EventAttend(student:string){
console.log(`${student} You Are Invited To Attend An Event At Governor House`)
}

(student&&IsEnrolled&&IsOnsite) && EventAttend(student); //way to declare a shortcircuit.

//Author-Huma Mohsin

