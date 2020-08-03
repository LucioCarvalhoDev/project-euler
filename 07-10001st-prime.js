//Enunciado
/*

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10001st prime number?

*/


let prime = [2]; //Lista com todos os numeros primos
let fragPrime; //Booleano que indentifica se um numero é primo

//Intera por todos os numeros impares
for (let num = 3; prime.length < 10001; num += 2) {

	fragPrime = true;

	//Verifica se é primo
	for (let dvsr = Math.trunc(num/2); dvsr > 1; dvsr--) {

		if (num % dvsr == 0) {
			
			fragPrime = false
		}
	}

	if (fragPrime == true) {prime.push(num)}
}

console.log(prime[prime.length - 1])