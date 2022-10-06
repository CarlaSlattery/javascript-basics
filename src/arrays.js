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
  const remove = [array.splice(index)];
  return remove;
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
  //your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

//started - not finished
const elementsStartingWithAVowel = strings => {
  for (let i = 0; i < strings.length; i++);
};

//not correct currently
const removeSpaces = string => {
  string.split(' ').join('');
};

const sumNumbers = numbers => {
  //reduce method needed
  //your code here
};
const sortByLastLetter = strings => {
  // your code here
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
