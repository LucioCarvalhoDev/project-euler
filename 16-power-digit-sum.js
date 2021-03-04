/*
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?
*/

//inputs
const initialNumber = 2n ** 1000n;

function sumOfDigits(string) {
    const digits = string.split('');

    const sum = digits.reduce((acc, cur) => {
        return acc + +cur;
    }, 0)

    return sum;
}

console.log(sumOfDigits(initialNumber+''));