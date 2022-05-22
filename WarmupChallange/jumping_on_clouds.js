function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;
    let ind = 0;
    while (ind < c.length - 1) {
        jumps++;
        ind = c[ind + 2] == '0' ? ind + 2 : ind + 1;
    }
    return jumps;

}