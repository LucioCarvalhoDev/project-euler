//Enunciado
/*

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/

let primes = [2]
let flagPrime;
let sum = 0;

for (let i = 3; i < 2000000; i += 2) {

	flagPrime = true

	for (let j = 3; j < i / 2; j += 2) {

		if ( i % j == 0) {

			flagPrime = false
			break
		}
	}

	if (flagPrime) primes.push(i)
}

primes.forEach(prime => sum += prime)

console.log(sum)//142913828922