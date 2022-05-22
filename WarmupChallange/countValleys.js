function countingValleys(path) {

    let valleys = 0;
    let level = 0;
    for (const step of path) {
        let prev = level;
        level = step == 'U' ? level + 1 : level - 1;
        if (prev == '-1' && level == '0') valleys++
    }

    return valleys;

}

console.log(countingValleys(['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U']))