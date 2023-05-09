function countLetters(str) {
    str = str.replace(" ", "")
    const letterCounts = {};
    for (let i = 0; i < str.length; i++) {
        const letter = str.charAt(i);
        letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }
    return letterCounts;
}
console.log(countLetters("Hellow World hehe"))