function countLetters(str) {
    const letterCounts = {};
    for (let i = 0; i < str.length; i++) {
        const letter = str.charAt(i);
        if (letter === ' ') {
            continue
        }
        letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }
    return letterCounts;
}
console.log(countLetters("Hellow World hehe"))