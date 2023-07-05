function reverse(word){
    //split input into arrays, reverse the array, then join again
    const reversedWord = word.split('').reverse().join('');

    return reversedWord;
}

const word = 'hello';
const reversedWord = reverse(word);
console.log(reversedWord); // 'olleh'