//Enunciado
/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

var n = 600851475143;//Numero a ser fatorado
var fac = [];//Lista de fatores
var pri = [];//Lista de fatores primos
var r;//Armazena o valor das divisões de n

//Fatora n
for (var i = 2; r != 1;) {
	r = n / i

	if (Math.floor(r) == r) {
		fac.push(i);
		n = r;
	} else {
		i++
	}
}

//Verifica se os fatores são primos
fac.forEach(function(numero){
	var i = 1;
	var divisores = 0;
	for (; i <= numero; i++) {
		if (numero % i == 0) {
			divisores++
		}
		if (divisores == 2) {
			pri.push(numero)
		}
	}
})

//Mostra o maior divisor primo
console.log(pri[pri.length - 1])
