//  Tổng hợp bài tập duyệt mảng #1

/**
 * 1. Counts elements in an array greater than a specified value.
 * @param {number[]} arr - Array to search.
 * @param {number} value - Value to compare against.
 * @return {number} Count of elements greater than value.
 */
function countGreaterThan(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) count++;
    }
    return count;
}

// Sample usage
console.log(countGreaterThan([1, 5, 7, 2, 3], 3)); // 2
console.log(countGreaterThan([2, 3, 1, -6, 8], 5)); // 1
console.log(countGreaterThan([], 5)); // 0

/**
 * 2. Calculates the alternating sum of an array, adding even-indexed elements and subtracting odd-indexed ones.
 * @param {number[]} arr - An array of integers.
 * @return {number} The alternating sum of the array.
 */
function alternateSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += i % 2 === 0 ? arr[i] : -arr[i];
    }
    return total;
}

// Sample usage
console.log(alternateSum([10, 5, 6, 3])); // 8 (10 - 5 + 6 - 3)
console.log(alternateSum([1, 2, 3, 4, 5])); // 3 (1 - 2 + 3 - 4 + 5)

/**
 * 3. Calculates the sum of the squares of each element in an array.
 * @param {number[]} arr - An array of integers.
 * @return {number} The sum of squares of the array elements.
 */
function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}

// Sample usage
console.log(sumOfSquares([1, 2, 3])); // 14 (1^2 + 2^2 + 3^2 = 14)
console.log(sumOfSquares([4, 5, 6])); // 77 (4^2 + 5^2 + 6^2 = 77)

/**
 * 4. Filters even numbers from an array and calculates their sum.
 * @param {number[]} arr - An array of integers.
 * @return {number} Sum of the even numbers.
 */
function filterEvensAndSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Sample usage
console.log(filterEvensAndSum([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6 = 12)
console.log(filterEvensAndSum([12, 14, 15, 19, 20, 100])); // 146 (12 + 14 + 20 + 100 = 146)

/**
 * 5. Finds the longest string in an array.
 * @param {string[]} arr - An array of strings.
 * @return {string} The longest string in the array. If there are multiple strings of the same maximum length, the first one is returned.
 */
function findLongestWord(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

// Sample usage
console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // banana
console.log(findLongestWord(["hello", "world", "this", "is", "great"])); // hello

// Tổng hợp bài tập duyệt mảng #2

/**
 * 1. Compresses a string by replacing sequences of the same character with that character followed by the count of repetitions.
 * @param {string} str - The string to be compressed.
 * @return {string} The compressed string.
 */
function compressString(str) {
    let compressed = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    return compressed;
}

// Sample usage
console.log(compressString("aaabbc")); // a3b2c1
console.log(compressString("aabcccccaaa")); // a2b1c5a3

/**
 * 2. Calculates the average grade from an array of scores and returns the letter grade.
 * @param {number[]} scores - An array of scores.
 * @return {string} The letter grade.
 */
function calculateGrade(arr) {
    let average = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        average = sum / arr.length;
        console.log(average);
    }
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    return "F";
}

// Sample usage
console.log(calculateGrade([92, 94, 99])); // A
console.log(calculateGrade([85, 80, 87])); // B

/**
 * 3. Checks if a string is a palindrome, ignoring case.
 * @param {string} str - The string to be checked.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}

// Sample usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

/**
 * 4. Finds the missing number in an array containing all numbers from 1 to n except one.
 * @param {number[]} arr - An array of integers from 1 to n missing one number.
 * @param {number} n - The maximum number in the range.
 * @return {number} The missing number.
 */
function findMissingNumber(arr, n) {
    let actualSum = 0;
    let total = (n * (n + 1)) / 2;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    return total - actualSum;
}

// Sample usage
console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)); // 6
console.log(findMissingNumber([1, 2, 3, 4], 4)); // 0

/**
 * 5. Finds the maximum number of consecutive 1s in a binary array.
 * @param {number[]} nums - A binary array consisting of only 0s and 1s.
 * @return {number} The maximum number of consecutive 1s.
 */
function maxConsecutiveOnes(arr) {
    let maxCount = 0;
    let currentCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;

            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
