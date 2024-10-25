// type of conversions = change the datatype of a value to another
// (strings, numbers, booleans)

// let age = window.prompt(" How old are you");
// age = Number(age); // this is a function, it will convert a data  type into a number... now it works. 
// age+=1; 

// console.log(age, typeof age); // in order for typeof age to work, comment out the type conversion on line 5. 
/* when age 30 is typed in, it shows 301 as answer. When he accept user input , its a string data
 type. a series of characters. 
 By adding 1 we appended one to our answer and not increasing by 1. 
 we are using string catinations. 
 
 
 
 
 */




 /*
 let x = ""; // pizza
 let y = "";
 let z = "";

 // we gonna convert different values to different value types

 x = Number(x);
y = String(y);
z = Boolean(z);


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// if you try to convert alphabetical letters to a number that will console log to NAN (not a number)
// word pizza already a string so converting it wont do anything. 
//if you convert a string into a boolean, converting the word pizza into a boolean returns true .... as long as theres some value and you convert it into a boolean it will always be true. 
// lines 38-40 are talking about when x,y,z were all assignted to the word pizza. 


// when its just " " this is a way to see a user left something empty. 


*/



/*  ****** CONSTANTS******  */ 

// CONSTANTS are variables you cant be changed

const pi = 3.14159;
let radius;
let circumference;

// pi = 400.00 // once assigned as constant. it can not be assigned again. 

radius = window.prompt ("enter the radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);