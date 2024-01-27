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

/**
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
  const positiveNum = number >= 0;
  return positiveNum;
}

/**
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
  let maxNum;
  if (a > b) {
    if (a > c) {
      maxNum = a;
    }
  } else if (b > a) {
    if (b > c) {
      maxNum = b;
    }
  } else if (c >= a) {
    if (c >= b) {
      maxNum = c;
    }
  }
  return maxNum;
}

/**
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
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
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
  let validIsosceles;
  if (a + b > c && b + c > a && a + c > b) {
    validIsosceles = a === b || b === c || a === c;
  } else {
    validIsosceles = false;
  }
  return validIsosceles;
}

/**
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
  let romanNum = '';
  let usedNum = num;
  const romanSymbols = 'IXVIVXLXC';
  const numeralValues = [9, 5, 4, 1];
  for (let i = 0; i < numeralValues.length; i += 1) {
    while (usedNum >= numeralValues[i]) {
      romanNum +=
        numeralValues[i] === 9
          ? romanSymbols.charAt(2 * i) + romanSymbols.charAt(2 * i + 2)
          : romanSymbols.charAt(2 * i);
      usedNum -= numeralValues[i];
    }
  }
  return romanNum;
}

/**
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
  const digitWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let convertedStr = '';
  /* let negativeNum = false; */
  let hasSpace = false;

  for (let i = 0; i < numberStr.length; i += 1) {
    const currentChar = numberStr[i];
    let digit = 0;

    switch (currentChar) {
      case '-':
        // negativeNum = true;
        convertedStr += 'minus';
        hasSpace = true;
        break;
      case '.':
        convertedStr += 'point ';
        hasSpace = true;
        break;
      default:
        digit = parseInt(currentChar, 10);

        if (!Number.isNaN(digit)) {
          convertedStr += (hasSpace ? ' ' : '') + digitWords[digit];
          hasSpace = true;
        } else {
          convertedStr += currentChar;
        }
    }
  }
  /* if (negativeNum) {
    convertedStr = `minus ${convertedStr}`;
  } */
  return convertedStr;
}

/**
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
  let palindromeStr = true;
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      palindromeStr = false;
      break;
    }
  }
  return palindromeStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
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
  const digitToString = String(digit);
  let positiveNum = Math.abs(num);

  while (positiveNum > 0) {
    const lastDigit = positiveNum % 10;
    if (String(lastDigit) === digitToString) {
      return true;
    }
    positiveNum = Math.floor(positiveNum / 10);
  }

  return false;
}

/**
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
  let arrayTotal = 0;
  for (let i = 0; i < arr.length; i += 1) {
    arrayTotal += arr[i];
  }

  let leftSum = 0;
  let rightSum = arrayTotal;

  for (let i = 0; i < arr.length; i += 1) {
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }
  return -1;
}

/**
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
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
}

/**
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
  const n = matrix.length;
  const backupMatrix = matrix;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const temp = backupMatrix[i][j];
      backupMatrix[i][j] = backupMatrix[j][i];
      backupMatrix[j][i] = temp;
    }
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < Math.floor(n / 2); j += 1) {
      const temp = backupMatrix[i][j];
      backupMatrix[i][j] = backupMatrix[i][n - 1 - j];
      backupMatrix[i][n - 1 - j] = temp;
    }
  }

  return backupMatrix;
}

/**
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
function sortByAsc(arr) {
  const backupArr = arr;
  const quicksort = (low, high) => {
    if (low < high) {
      const pivot = backupArr[high];
      let i = low - 1;

      for (let j = low; j < high; j += 1) {
        if (backupArr[j] <= pivot) {
          i += 1;
          const temp = backupArr[i];
          backupArr[i] = backupArr[j];
          backupArr[j] = temp;
        }
      }

      const temp = backupArr[i + 1];
      backupArr[i + 1] = backupArr[high];
      backupArr[high] = temp;

      const pivotIndex = i + 1;

      quicksort(low, pivotIndex - 1);
      quicksort(pivotIndex + 1, high);
    }
  };

  const n = backupArr.length;
  quicksort(0, n - 1);
  return backupArr;
}

/**
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
function shuffleChar(str, iterations) {
  let backupStr = str;
  const strLength = backupStr.length;

  for (let iter = 0; iter < iterations; iter += 1) {
    let oddChars = '';

    for (let i = 1; i < strLength; i += 2) {
      oddChars += backupStr[i];
    }

    let newStr = '';

    for (let i = 0; i < strLength; i += 2) {
      newStr += backupStr[i];
      if (i === strLength - 2) {
        newStr += oddChars;
      }
    }

    backupStr = newStr;
  }

  return backupStr;
}

/**
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
function getNearestBigger(number) {
  const digits = [];
  let tempNumber = number;

  while (tempNumber > 0) {
    const digit = tempNumber % 10;
    digits.unshift(digit);
    tempNumber = (tempNumber / 10) | 0;
  }

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i === -1) {
    return number;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  const temp = digits[i];
  digits[i] = digits[j];
  digits[j] = temp;

  for (let x = i + 1; x < digits.length - 1; x += 1) {
    for (let y = x + 1; y < digits.length; y += 1) {
      if (digits[x] > digits[y]) {
        const temp = digits[x];
        digits[x] = digits[y];
        digits[y] = temp;
      }
    }
  }

  let nearestLarger = 0;
  for (let k = 0; k < digits.length; k += 1) {
    nearestLarger = nearestLarger * 10 + digits[k];
  }

  return nearestLarger;
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
