/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/** 1
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/** 2
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b) {
    if (c > a) return c;
    return a;
  }
  if (b > a) {
    if (c > b) return c;
    return b;
  }
  return c;
}

/** 3
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/** 4
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a >= b + c || b >= a + c || c >= a + b) return false;
  if (a === b || a === c || b === c) return true;
  return false;
}

/** 5
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let roman = '';
  const left = num % 10;
  for (let i = 1; i <= num / 10; i += 1) {
    roman += 'X';
  }
  if (left < 4) {
    for (let i = 1; i <= left; i += 1) {
      roman += 'I';
    }
  } else {
    if (left === 4) roman += 'IV';
    if (left > 4 && left < 9) {
      roman += 'V';
      for (let i = 6; i <= left; i += 1) {
        roman += 'I';
      }
    }
    if (left === 9) roman += 'IX';
  }
  return roman;
}

/** 6
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let wordNum = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i !== 0) wordNum += ' ';
    switch (numberStr[i]) {
      case '0':
        wordNum += 'zero';
        break;
      case '1':
        wordNum += 'one';
        break;
      case '2':
        wordNum += 'two';
        break;
      case '3':
        wordNum += 'three';
        break;
      case '4':
        wordNum += 'four';
        break;
      case '5':
        wordNum += 'five';
        break;
      case '6':
        wordNum += 'six';
        break;
      case '7':
        wordNum += 'seven';
        break;
      case '8':
        wordNum += 'eight';
        break;
      case '9':
        wordNum += 'nine';
        break;
      case '-':
        wordNum += 'minus';
        break;
      case '.':
        wordNum += 'point';
        break;
      default:
        wordNum += 'point';
    }
  }
  return wordNum;
}

/** 7
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

/** 8
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/** 9
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  const letter = `${digit}`;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return true;
  }
  return false;
}

/** 10
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length - 1; i += 1) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < i; j += 1) {
      sum1 += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      sum2 += arr[j];
    }
    if (sum1 === sum2) return i;
  }
  return -1;
}

/** 11
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(num) {
  const arr = [];
  for (let i = 0; i < num; i += 1) {
    arr[i] = [];
    for (let j = 0; j < num; j += 1) {
      arr[i][j] = false;
    }
  }
  let i = 0;
  let j = 0;
  let left = false;
  let down = false;
  let right = true;
  let up = false;
  let nums = 1;
  for (let count = 1; count < num * 2; count += 1) {
    if (right) {
      for (j += 0; j < num; j += 1) {
        if (arr[i][j]) break;
        arr[i][j] = nums;
        nums += 1;
      }
      j -= 1;
      i += 1;
      right = false;
      down = true;
    }
    if (down) {
      for (i += 0; i < num; i += 1) {
        if (arr[i][j]) break;
        arr[i][j] = nums;
        nums += 1;
      }
      i -= 1;
      j -= 1;
      down = false;
      left = true;
    }
    if (left) {
      for (j += 0; j >= 0; j -= 1) {
        if (arr[i][j]) break;
        arr[i][j] = nums;
        nums += 1;
      }
      j += 1;
      i -= 1;
      left = false;
      up = true;
    }
    if (up) {
      for (i += 0; i >= 0; i -= 1) {
        if (arr[i][j]) break;
        arr[i][j] = nums;
        nums += 1;
      }
      i += 1;
      j += 1;
      up = false;
      right = true;
    }
  }
  return arr;
}

/** 12
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const data = [];
  let index = 0;
  const size = matrix[0].length;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < size; j += 1) {
      data[index] = matrix[i][j];
      index += 1;
    }
  }
  index = 0;
  const arr = matrix;
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }
  for (let j = matrix.length - 1; j >= 0; j -= 1) {
    for (let i = 0; i < size; i += 1) {
      arr[i][j] = data[index];
      index += 1;
    }
  }
  return arr;
}

/** 13
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr1) {
  const arr = arr1;
  let min = 0;
  let indexOfMin = 0;
  for (let i = 0; i < arr.length - 1; i += 1) {
    min = arr[i];
    let change = false;
    for (let j = i; j < arr.length; j += 1) {
      if (arr[j] < min) {
        min = arr[j];
        indexOfMin = j;
        change = true;
      }
    }
    if (change) arr[indexOfMin] = arr[i];
    arr[i] = min;
  }
  return arr;
}
/** 14
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function makeIterations(str) {
  let str1 = '';
  let str2 = '';
  for (let i = 0; i < str.length; i += 2) {
    str1 += str[i];
    if (str[i + 1]) str2 += str[i + 1];
  }
  return str1 + str2;
}

function shuffleChar(str1, iterations) {
  let str = str1;
  let recurs = iterations;
  for (let i = 0; i < recurs; i += 1) {
    str = makeIterations(str);
    if (str === str1) recurs = (iterations % (i + 1)) + i + 1;
  }
  return str;
}

/** 15
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function sortNumber(input) {
  const str = input;
  let index = 0;
  let tempindex = str.length - 1;
  while (tempindex > 0) {
    if (+str[tempindex] > +str[0]) {
      index = tempindex;
      break;
    }
    tempindex -= 1;
  }
  let sortedStr = str[index];
  let done = true;
  for (let i = str.length - 1; i > 0; i -= 1) {
    if (i !== index) {
      if (+str[0] < +str[i] && done) {
        sortedStr += str[0];
        done = false;
      }
      sortedStr += str[i];
    }
  }
  if (done) sortedStr += str[0];
  return sortedStr;
}

function getLastNumbers(number, length) {
  let newNumber = '';
  const str = `${number}`;
  for (let i = 1; i <= length; i += 1) {
    newNumber = `${str[str.length - i]}${newNumber}`;
  }
  return newNumber;
}

function getNumber(number, partOfNumber) {
  const input = `${number}`;
  const str = `${partOfNumber}`;
  const tempNumber = sortNumber(str);
  let finalNumber = '';
  for (let i = 0; i < input.length - tempNumber.length; i += 1) {
    finalNumber += input[i];
  }
  finalNumber += tempNumber;
  return +finalNumber;
}

function getNearestBigger(number) {
  let s = 0;
  for (let i = 2; i <= `${number}`.length; i += 1) {
    s = getLastNumbers(number, i);
    if (+s[0] < +s[1]) return getNumber(number, s);
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
