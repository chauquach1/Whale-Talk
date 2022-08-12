var input = 'states and minds';

var vowels = ['a', 'e', 'i', 'o', 'u']

var resultArray = [];

for (let i = 0; i < input.length; i++) {
  const letter = input[i];

  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }

  if (input[i] === 'u') {
    resultArray.push(input[i])
  }
  
  for (let i = 0; i < vowels.length; i++) {
    const vowel = vowels[i];
  
    if (letter === vowel) {
      resultArray.push(vowel);
    }
  }
}

var resultString = resultArray.join('').toUpperCase();

console.log(resultString);
