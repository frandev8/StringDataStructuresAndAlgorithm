
// How to check for double space in a text
// Working with a loop limiter, a flag, for loops, if statement, break statement, slice method, include method.



// loop limiter helps to keep track of the loop. 
// flag is a variable with default value and it changes or switches under certain conditions to prevent potential communication problems.
// for loop is used for an known iteration process.
// if statement is used to make logical comparisons.
// break statement is used to stop or terminate a loop.
//The slice method is a string method that's used to copy a portion or part of a text. 
// replace method is used to exchange a text with another text. 
// include method is used to check if a character or text is part of a string.



let message = "Did she  graduate in the School of life";

let loopLimit = message.length; 


// classical approach
let isValidMessage = false;
for(let i = 0; i < loopLimit; i++){
  if( message.slice(i,i+2)==="  "){
    isValidMessage = true
    // console.log("Yes, this message contains double space.");
    break;
  }
}

if(!isValidMessage){
  // console.log("No, this message is absolutely fine.");  
}


// output
/* Yes, this message contains double space.*/ 



// modern approach
if(message.includes("  ")){
  console.log("Yes, this message contains double space.")
}else {
  console.log("No, this message is absolutely fine")
}