function repeatedString(s, n) {
    // Write your code here
    let a = 0;
    const k = s.length;
    if (n >= k) {
        for (let i = 0; i < k; i++) {
            if (s[i] === 'a') a++;
        }
    }
    a *= Math.floor(n / k);
    for (let ind = 0; ind < n % k; ind++) {
        if (s[ind] === 'a') a++
    }
    return a;


}