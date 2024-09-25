function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let char of s) {
        const currentValue = romanMap[char];

        if (currentValue > prevValue) {
            total += currentValue - 2 * prevValue; 
        } else {
            total += currentValue;  
        }

        prevValue = currentValue;  
    }

    return total;
}

module.exports = { romanToInt };
