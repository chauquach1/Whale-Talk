var input = 'states and minds';

var vowels = ['a', 'e', 'i', 'o', 'u']

var resultArray = [];

for (let i = 0; i < input.length; i++) {
  const letter = input[i];

  if (letter === 'e') {
    resultArray.push(letter);
  }

  if (letter === 'u') {
    resultArray.push(letter)
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
