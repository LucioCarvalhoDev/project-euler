//Enunciado
/*

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

let result;

let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (let i = 20, arr = []; i < Infinity; i+=2) {
    arr = [];
    list.forEach(item => {
        if (i % item === 0) {
            arr.push(true);
        } else {
            arr.push(false);
        }
    })

    if (arr.includes(false)) continue;
    result = i;
    break;
}

console.log(result);
