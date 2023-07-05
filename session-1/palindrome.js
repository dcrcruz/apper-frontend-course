function isPalindrome(word) {
    //convert input to lowercase
    const convertToLoweredCase = word.toLowerCase();

    //reverse the word
    const reversedWord = convertToLoweredCase.split('').reverse().join('');

    //return true if palindrome, else false
    return convertToLoweredCase === reversedWord;

}

const word = 'racecar'
if (isPalindrome(word)) {
    console.log('It is a palindrome!');
} else {
    console.log('It is not a palindrome!')
}