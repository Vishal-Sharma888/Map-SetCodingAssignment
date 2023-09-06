let str = "abcadeecfb"
let ans = new Set(str);
ans=[...ans]
ans = ans.join(' ');
console.log(ans); 
// ----------------------------------------------------------
function countAlphabets(inputStr) {
    const alphabetCount = new Map(); // Create a Map to store the counts
    const seenCharacters = new Set(); // Create a Set to track seen characters

    for (const char of inputStr) {
        if (/[a-zA-Z]/.test(char) && !seenCharacters.has(char)) {
            const charLower = char.toLowerCase(); // Convert the character to lowercase
            let count = 0;

            for (const c of inputStr) {
                if (c.toLowerCase() === charLower) {
                    count++;
                }
            }

            alphabetCount.set(charLower, count);
            seenCharacters.add(char);
        }
    }

    alphabetCount.forEach((count, char) => {
        console.log(`${char}=${count}\n`);
    });
}

// Input string
const inputStr = "abcadeecfb";
countAlphabets(inputStr);
