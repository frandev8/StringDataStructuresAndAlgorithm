
// How to check for double space in text
// Working with a loop limiter, a flag and the slice method

// loop limiter helps to keep track of the loop 

// flag is a variable with default value and it changes or switches under certain conditions to prevent potential communication problem.

//the slice method is a string method that's used to copy a portion or part of a text. 
let message = "Did she  graduate in the School of life";

let loopLimit = message.length; 

let isValidMessage = false;
for(let i = 0; i < loopLimit; i++){
  if( message.slice(i,i+2)==="  "){
    isValidMessage = true
    console.log("Yes, this message contains double space");
    break;
  }
}

if(!isValidMessage){
  console.log("No, this message is absolutely fine.");
}
