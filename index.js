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

 let x = "pizza";
 let y = "pizza";
 let z = "pizza";

 // we gonna convert different values to different value types

 x = Number(x);
y = String(y);
z = Boolean(z);


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);