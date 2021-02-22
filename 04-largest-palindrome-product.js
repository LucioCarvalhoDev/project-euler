//Enunciado
/*

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

var numeros = [];
var r = 0;
var palindromo = [];

//Cria array com cada numero entre 100 e 999
for (var i = 999; i >= 1; i--) {
	numeros.push(i)
}

//Multiplica cada item do array por cada numero entre 100 e 999
numeros.forEach(function(item){

	for (var i = 999; i >= 1; i--) {
		r = (i * item);
		//Verifica a "palindromolidade" :3
		if (r.toString().split("").reverse().join("") == r.toString()) {
			palindromo.push(r);
			break
		}

	}
})

//Ordena os maiores valores do array primeiro
palindromo = palindromo.sort(function(a, b) {
  return b - a;
});
console.log(palindromo[0])//906609