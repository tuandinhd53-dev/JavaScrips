// ****Loops****

// 1 Tạo hàm reverseString

/**
 * Reverses a string.
 *
 * @param {string} str - The string to be reversed
 * @returns {string} The reversed string
 */
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Sample usage
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("JavaScript")); // "tpircSavaJ"

// 2 Tạo hàm findMax

/**
 * Finds the maximum number in an array.
 *
 * @param {Array<number>} arr - The array to find the maximum number in
 * @returns {number} The maximum number in the array
 */
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Sample usage
console.log(findMax([1, 3, 5, 7, 9])); // 9
console.log(findMax([10, 20, 30, 40, 50])); // 50
console.log(findMax([-5, -2, -1, -3])); // -1

// 3 Tổng hợp vòng lặp For #1

/**
 * 1. Lists all even numbers in a given range.
 *
 * @param {number} start - The start of the range
 * @param {number} end - The end of the range
 */

function listEvenNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Sample usage
listEvenNumbers(1, 10);
// 2
// 4
// 6
// 8
// 10

/**
 * 2. Calculates the sum of all odd numbers in an array.
 *
 * @param {Array<number>} numbers - The array of numbers
 * @returns {number} The sum of odd numbers
 */
function sumOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Sample usage
console.log(sumOddNumbers([1, 2, 3, 4, 5])); // 9

/**
 * 3. Finds the minimum number in an array.
 *
 * @param {Array<number>} arr - The array to find the minimum number in
 * @returns {number} The minimum number in the array
 */
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Sample usage
console.log(findMin([5, 2, 8, 1, 4])); // 1

// 4 Tổng hợp vòng lặp For #2

/**
 * 1. Counts the number of positive numbers in an array.
 *
 * @param {Array<number>} numbers - The array of numbers
 * @returns {number} The count of positive numbers
 */
function countPositiveNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}

// Sample usage
console.log(countPositiveNumbers([-1, 2, 3, -4, 5])); // 3

/**
 * 2. Calculates the sum of all numbers in an array.
 *
 * @param {Array<number>} arr - The array of numbers
 * @returns {number} The sum of the numbers
 */
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/**
 * 3. Calculates the average of numbers in an array.
 *
 * @param {Array<number>} numbers - The array of numbers
 * @returns {number} The average of the numbers
 */
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log();
        sum += arr[i];
    }
    return arr.length > 0 ? sum / arr.length : 0;
}

// 4 Tổng hợp vòng lặp For #3

/**
 * 1. Checks if an array is strictly ascending.
 *
 * @param {Array<number>} arr - The array to check
 * @returns {boolean} True if the array is ascending, false otherwise
 */
function isAscending(arr) {
    if (arr.length <= 1) return false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) return false;
    }
    return true;
}

// Sample usage
con;

// Sample usage
console.log(calculateAverage([10, 20, 30, 40, 50])); // 30

/**
 * 2. Checks if a number is prime.
 *
 * @param {number} n - The number to check
 * @returns {boolean} True if n is a prime number, false otherwise
 */ function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Sample usage
console.log(isPrime(2)); // true

/**
 * 3. Sums all prime numbers in a given range.
 *
 * @param {number} start - The start of the range
 * @param {number} end - The end of the range
 * @returns {number} The sum of prime numbers in the range
 */
function sumPrimes(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

// Sample usage
console.log(sumPrimes(10, 20)); // 60
