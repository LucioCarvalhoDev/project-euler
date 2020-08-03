//Enunciado
/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

// let a = 1;
// let result = "falha mizeravel"


// for (; a < 100; a++) {

// 	for (var b = a + 1; b < 100; b++) {

// 		var c = Math.sqrt( (a**2)+(b**2) )

// 		if (c == Math.floor(c)) {
		 
// 			console.log(`${a}² + ${b}² = ${c}²` + " sum: " + a+b+c)

// 		}
			
// 	}
// }

// console.log(result)
function pt(n) {
	var r = new Array();
	var c;
	for (var i=1; i <= n/2 - 2; i++) {
		for (var j=i; j <= n/2 - 1; j++) {
			c = n - i - j;
			if (! ((c > j)  && (i < j)) )  {
				continue;
			} else if ( Math.pow(i,2) + Math.pow(j,2) == Math.pow(c,2) ) {
				r = [];
				r = [i, j, c];
			}
		}
	}
	return r;
}

var prod = 1;
var result = pt(1000);
for ( var i in result ) {
	prod *= result[i];
}

alert("answer : " + prod);