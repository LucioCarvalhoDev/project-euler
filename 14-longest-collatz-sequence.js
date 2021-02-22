function collatz(n) {
    if (n === 1) return 1;
    if (n % 2 === 0) return n/2;
    return (3*n)+1;
}

function collatzSequence(terms=[1]) {
    if (terms[terms.length-1] == 1) return terms;
    return collatzSequence(terms.concat(collatz(terms[terms.length-1])));
}

const numberOfTerms = [];

for (let initial = 1; initial <= 1000000; initial++) {
    numberOfTerms.push(collatzSequence([initial]).length);
}

// console.log(numberOfTerms);
console.log(Math.max(...numberOfTerms));