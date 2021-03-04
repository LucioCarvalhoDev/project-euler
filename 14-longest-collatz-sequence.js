function collatz(n) {
    if (n === 1) return 1;
    if (n % 2 === 0) return n / 2;
    return (3 * n) + 1;
}


function collatzSequence(range=1) {
    let biggerCollatz = { generator: 1, numberOfTerms: 1, terms: 1 };

    for (let initial = 1; initial < range; initial++) {
        const terms = [initial];
        while (terms[terms.length - 1] !== 1) {
            terms.push(collatz(terms[terms.length - 1]));
        }

        if (terms.length > biggerCollatz.numberOfTerms) {
            biggerCollatz = { generator: initial, numberOfTerms: terms.length, terms: terms }
        }
    }

    return biggerCollatz;
}


console.log(collatzSequence(4));//{ generator: 837799, numberOfTerms: 525 }
