// How to substitute some characters with other characters in a text.
// Working with loop limiter, for loops, if statements, break statement, slice method,indexOf method,include method, replace method.

// loop limiter helps to keep track of a loop.
// for loop is used for an known iteration process.
// if statement is used to make logical comparisons.
// break statement is used to stop or terminate a loop.
// slice method is used to copy a part or portion of a text.
// indexOf method returns the position of its first match string argument or -1 if not found.
// include method is used to check if a character or text is part of a string.
// replace method is used to exchange a text with another text. 



let message = "I learned how to solve a 3x3 rubik's cube correctly on youtube yesterday in the beginner's way.";


// first classical approach
function ReplaceCharacters1 (message) {

  let limitTracker = message.length;

  for(let i = 0; i < limitTracker; i++){
    if(message.slice(i,i+3)==="3x3"){
      message = message.slice(0,i) + "three by three" + message.slice(i+3);
      break;
    }
    
  }

  // return message
}


// enhance classical approach
function ReplaceCharacters2 (message) {

  let matchStartingIndex = message.indexOf("3x3");
  
  if(matchStartingIndex !== -1){
    message= message.slice(0,matchStartingIndex) + "three by three" + message.slice(matchStartingIndex,matchStartingIndex+3); 
  }
  
  // return message;
}


// modern and less work approach
function ReplaceCharacters3 (message) {

  if(message.includes("3x3")){
  message.replace("3x3", "three by three");
  }
  
  return message;
}




