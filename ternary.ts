//ternary operator is a conditional operator.
//ternary operator is used inplace of if-else condition as a shortcut.
//ternary operator has 3 operands i.e condition ? if condition true this piece of code executes:else this piece of code is executed.
//ternary operator makes the code more concise and increase its readability.

//login system:-

// by using if else.
console.log("By Using If else")
let userName:string="Huma Mohsin";
let password:string|number="asd6589";
if (userName==="Huma Mohsin" && password==="asd6589"){
    console.log("You are Sucessfully Logged In")
}else{
    console.log("Invalid User Name or Password ,Try Again")
}
console.log("\n")
 //this above code can be replaced by ternary operator as:-

console.log("By Using Ternary Operator")
userName==="huma"&& password==="7896"?console.log("You Logged In"):console.log("Try Again")
//Author-Huma Mohsin