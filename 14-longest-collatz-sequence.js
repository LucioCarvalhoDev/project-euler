function collatz(n) {
    if (n === 1) return 1;
    if (n % 2 === 0) return n/2;
    return (3*n)+1;
}

let biggerCollatz = {generator: 1, numberOfTerms:1};

for (let initial = 1; initial < 1000000; initial++) {
    const terms = [initial];
    while(terms[terms.length-1] !== 1) {
        terms.push(collatz(terms[terms.length-1]));
    }
    
    if (terms.length > biggerCollatz.numberOfTerms) {
        biggerCollatz = {generator: initial, numberOfTerms: terms.length}
    }
}



console.log(biggerCollatz);//{ generator: 837799, numberOfTerms: 525 }
