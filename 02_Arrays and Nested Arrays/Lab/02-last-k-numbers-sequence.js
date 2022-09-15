function solve(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        
        let startIdx = i - k < 0 ? 0 : i - k;
        
        result.push(result
            .slice(startIdx)
            .reduce((a, x) => a + x, 0));
    }

    return result;
}


solve(6, 3);