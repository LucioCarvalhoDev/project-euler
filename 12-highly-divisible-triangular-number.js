//Enunciado
/*

The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?

*/

// let numbers = [1];
// let divisors;

// while (divisors != 500) {
//     divisors = 0;

//     triangleNumber = numbers.reduce((acc, cur) => {return acc+=cur},0);
    

//     for (let i = 1; i <= triangleNumber; i++) {
        
//         if (triangleNumber % i == 0) divisors++;
//     }
//     console.log(triangleNumber, divisors)
//     numbers.push(numbers[numbers.length - 1] + 1);
// }

// console.log('result: ' + numbers.reduce((acc, cur) => {return acc+=cur},0))

let triangleNumber = 0;
let divisors = 0;

for (let i = 1; divisors < 500 ; i++) {

	divisors = 0;
	triangleNumber += i;

	for (let j = 1; j <= triangleNumber; j++) {
		if (triangleNumber % j == 0) divisors++;
	}
	
}

console.log(triangleNumber)//76576500