//Enunciado
/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

var number = 1;
var multiple = [];

//Cria array com os multiplos
while(number < 1000) {
	if (number % 3 == 0) {
		multiple.push(number)
	}
	if ( (number % 5 == 0) && (multiple[multiple.length - 1] != number) ) {
		multiple.push(number)
	}
	number++
}

//Soma os multiplos

var soma = 0;
multiple.forEach(item => soma+=item)

console.log(soma)

/*

RESPOSTA DO SENSEI

let sum = 0;
for (let i = 0; i < 1000; i++) {
	if ((i % 3 == 0) || (i % 5 == 0)) {
	sum += i;
	};
};
console.log(sum);
	
*/
