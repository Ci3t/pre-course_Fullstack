const primeNumberFromOneToN = (n) => {
    let numbers = []
    for (let i = 0; i < n; i++) {
        let prime = 0;

        for (let j = 1; j <= n; j++) {
            if (i % j == 0) {
                prime++;
            }
        }
        if (prime == 2) numbers.push(i);

    }
    return numbers.length
}

console.log(primeNumberFromOneToN(10));