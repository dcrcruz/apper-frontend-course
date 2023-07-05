function convertToVowels(word) {
    //logic here
    const vowels = [];
    const vowelChars = ['a', 'e', 'i', 'o', 'u'];
    
    //convert input to lowercase
    const convertToLoweredCase = word.toLowerCase();

    //iterate over each character of the input
    for (let i=0; i < convertToLoweredCase.length; i++) {
        const char = convertToLoweredCase[i];

        //check if character is a vowel
        if (vowelChars.includes(char)) {
            vowels.push(char);
        }
    }

    // return vowels in String format
    return vowels.join();

}

const word = 'thisissomeword';
const wordWithOnlyVowels = convertToVowels(word);
console.log(wordWithOnlyVowels) // iioeo