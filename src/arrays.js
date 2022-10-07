const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array, element];
  return newArray;
};

//not correct currently
const removeNthElement = (index, array) => {
  const newArray = element => element.splice();
};

const numbersToStrings = numbers => {
  const numbersArr = number => {
    return number.toString();
  };
  return numbers.map(numbersArr);
};

const uppercaseWordsInArray = strings => {
  const makeUpper = string => {
    return string.toUpperCase();
  };
  return strings.map(makeUpper);
};

const reverseWordsInArray = strings => {
  const reverseArr = string => {
    return string
      .split('')
      .reverse()
      .join('');
  };
  return strings.map(reverseArr);
};

const onlyEven = numbers => {
  const myArray = num => {
    return num % 2 === 0;
  };
  return numbers.filter(myArray);
};

const removeNthElement2 = (index, array) => {};

//not working
const elementsStartingWithAVowel = strings => {
  const vowels = 'aeiou';
  return vowels.includes(strings.charAt(0));
};

const removeSpaces = string => {
  return string.replace(/ /g, '');
};
//not working
const sumNumbers = numbers => {
  const array = sumNumbers.reduce((acc, val) => acc + val, 0);
  return numbers(array);
};
//not working
const sortByLastLetter = strings => {
  strings
    .split('')
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
