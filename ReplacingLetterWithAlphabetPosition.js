// Code Challenge
// How to replace letter with alphabet position and ignore text that is not a letter

// Working with functions, toLowerCase method, loop limiter, object, array, for loops, if statement, Object.keys method, includes method, push method, string literal, join method



let message = "The sunset sets at twelve o'clock,";

// classical approach
function ReplaceLetterWithAlphabetPos1(message) {
  message = message.toLowerCase();

  let loopTracker = message.length;

  const AlphabetPositionMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let sentenceMaker = [];

  const objectKeys = Object.keys(AlphabetPositionMap);

  for (let i = 0; i < loopTracker; i++) {
    if (objectKeys.includes(message[i])) {
      let positionMapped = AlphabetPositionMap[`${message[i]}`];
      sentenceMaker.push(positionMapped);
    }
  }

  return sentenceMaker.join(" ");
}

//  cool classical Approach
function ReplaceLetterWithAlphabetPos2(message) {
  const AlphabetPositionMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const regExp = /[a-z]/gi;

  let matchedLetters = message.match(regExp);

  let loopLimit = matchedLetters.length;

  const sentenceMaker = [];

  for (let i = 0; i < loopLimit; i++) {
    let positionMapped =
      AlphabetPositionMap[`${matchedLetters[i].toLowerCase()}`];

    sentenceMaker.push(positionMapped);
  }

  return sentenceMaker.join(" ");
}


// best practice
function ReplaceLetterWithAlphabetPos3(message) {
 return message.toUpperCase().match(/[a-z]/gi).map((letter)=>{
    return letter.charCodeAt() - 64;
  }).join(" ");
}

console.log(ReplaceLetterWithAlphabetPos3(message));
