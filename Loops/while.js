
// ########### While ############



//  Tạo hàm printFibonacci


/**
 * Prints the Fibonacci sequence up to a value not exceeding n.
 * @param {number} n - The upper limit for the values in the Fibonacci sequence to be printed.
 */
function printFibonacci(n) {
    let a = 0, b = 1, next;
    console.log(a);
    while (b <= n) {
        console.log(b);
        next = a + b;
        a = b;
        b = next;
    }
}

// Sample usage
printFibonacci(5);
// 0
// 1
// 1
// 2
// 3
// 5
printFibonacci(10);
// 0
// 1
// 1
// 2
// 3
// 5
// 8

// Tạo hàm findFibonacci = for

/**
 * Finds the nth Fibonacci number.
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} The nth Fibonacci number.
 */
function findFibonacci(n) {
    let a = 0 ,  b = 1 ,next
    if (n <= 1) return n
    for (let i = 2 ; i <= n ; i++) {
        
        next = a + b
        a = b
        b = next
    }
   return next
}

// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, v.v
// Sample usage
console.log(findFibonacci(0)); // 0
console.log(findFibonacci(1)); // 1
console.log(findFibonacci(3)); // 2
console.log(findFibonacci(8)); // 21