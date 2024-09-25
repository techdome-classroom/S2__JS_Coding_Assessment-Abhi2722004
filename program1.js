function isValid(s) {
    const stack = [];
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (mapping[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || mapping[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

module.exports = { isValid };  
