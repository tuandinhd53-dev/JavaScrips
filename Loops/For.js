

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
