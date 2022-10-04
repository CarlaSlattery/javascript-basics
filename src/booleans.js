function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  return (a && !b) || (!a && b);
}

function truthiness(a) {
  return a;
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isSquare(a) {
  if (a >= 0 && Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWith(char, string) {
  if (char === string[0]) {
    return true;
  } else {
    return false;
  }
}

function containsVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (string.includes(vowels)) {
    return true;
  } else {
    return false;
  }
}

function isLowerCase(string) {
  // your code here
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
