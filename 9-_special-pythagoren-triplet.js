//Enunciado
/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

let a = 1;
let result = "falha mizeravel"


for (; a < 100; a++) {

	for (var b = a + 1; b < 100; b++) {

		var c = Math.sqrt((a**2)+(b**2))

		if (c == Math.round(c)) {
		 
			console.log(`${a}² + ${b}² = ${c}²` + " sum: " + a+b+c)

		}

			
	}
}

console.log(result)
