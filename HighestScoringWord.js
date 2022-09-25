// Code Wars Challenge
// How to obtain the first highest word with alphabetic positioning

// Word with functions, split method, map method, flags, regExp, forEach method, if statement, regex test method, toUpperCase method, charCodeAt method, Math.max method


// classical approach
function HighestScoringWord(x) {
  x = x.split(" ");

  let wordScore = x.map((word) => {
    let accumulator = 0;

    let pattern = /[a-z]/i;

    [...word].forEach((letter) => {
      if (pattern.test(letter)) {
        return (accumulator += letter.toUpperCase().charCodeAt() - 64);
      }
    });

    return accumulator;
  });
  return x[wordScore.indexOf(Math.max(...wordScore))];
}

console.log(HighestScoringWord("Generally, you need to believe in yourself that you will make it."));
