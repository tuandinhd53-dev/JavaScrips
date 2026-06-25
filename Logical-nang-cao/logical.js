// Tối ưu hàm kiểm tra Object

/**
 * Checks if the input is an object excluding arrays and null
 * @param {*} input - The input to check
 * @return {boolean} - True if input is an object, false otherwise
 */
function isObject(input) {
    return !!input && typeof input === "object";
}

// Sample usage
console.log(isObject(null)); // false
console.log(isObject({ name: "John Smith" })); // true

// Tạo hàm showMessage

/**
 * Show a message in the console if it's not an empty string.
 * @param {string} message - The message to be shown.
 */
function showMessage(message) {
    message && console.log(message);
}

// Sample usage
showMessage(""); // Không in gì cả
showMessage("Hello World!"); // In ra "Hello World!"

// Nullish Coalescing

// Tạo hàm getElement

/**
 * Returns the element at the specified index, or the default value if the element is null or undefined.
 * @param {Array} array - The array to retrieve the element from.
 * @param {number} index - The index of the element to retrieve.
 * @param {*} defaultValue - The default value to return if the element is null or undefined.
 * @returns {*} - The element at the specified index, or the default value.
 */ function getElement(array, index, defaultValue) {
    return array[index] ?? defaultValue;
}

// Sample usage
const colors = ["Red", "Green", null, "Blue", ""];

console.log(getElement(colors, 0, "Unknown")); // Red
console.log(getElement(colors, 2, "Unknown")); // Unknown
console.log(getElement(colors, 4, "Unknown")); //
console.log(getElement(colors, 5, "Unknown")); // Unknown

// Tạo hàm validateAge

/**
 * Validates if the age is a valid positive number, or returns an error message if it's null or undefined.
 * @param {number|null|undefined} age - The age to validate.
 * @returns {boolean|string} - True if age is a valid positive number, false if invalid, or an error message if null/undefined.
 */
function validateAge(age) {
    if (age === null || age === undefined)
        return "Error: Age is null or undefined";
    return !isNaN(age) && typeof age === "number" && age >= 0;
}

// Sample usage
console.log(validateAge(25)); // true
console.log(validateAge(null)); // "Error: Age is null or undefined"
console.log(validateAge(-5)); // false

// Tạo hàm formatName

/**
 * Formats a full name by concatenating first name and last name.
 * If either firstName or lastName is null or undefined, it is replaced by an empty string.
 * @param {string|null|undefined} firstName - The first name.
 * @param {string|null|undefined} lastName - The last name.
 * @returns {string} - The formatted full name.
 */
function formatName(firstName, lastName) {
    return `${firstName ?? ""} ${lastName ?? ""} `;
}

// Sample usage
console.log(formatName("John", "Doe")); // John Doe
console.log(formatName(null, "Doe")); // Doe
console.log(formatName("John")); // John
console.log(formatName()); //
