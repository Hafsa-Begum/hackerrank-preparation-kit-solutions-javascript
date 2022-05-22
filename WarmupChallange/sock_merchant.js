function sockMerchant(n, ar) {
    const sockPair = {};
    let total = 0;
    for (let i = 0; i < n; i++) {
        const current = ar[i];
        if (!sockPair[current]) {
            sockPair[current] = true;
        } else {
            total += 1;
            sockPair[current] = null;
        }
    }

    return total;

}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))