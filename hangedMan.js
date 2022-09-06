const figlet = require('figlet');
const readlineSync = require('readline-sync')

let won = true;
let words = ['Maxim', 'Fat', 'Russian', 'From', 'Ukraine', 'And', 'Belarus']; // list of random words 

// getrandom word from the words list 
const getRandomWord = (words) => {
    let randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}
// create hidden word with * to display
const createHiddenWord = (word) => {
    let hiddenWord = []
    for (let i = 0; i < word.length; i++) {
        hiddenWord.push('*')
    }
    return hiddenWord
}
const isLetter = (letter) => {
    if (letter == null) {
        return false;
    }
    return letter.length === 1 && letter.match(/[a-z]/i);
}
//check if letter inside the word
const isLetterInWord = (letter, word) => {
    return word.toLowerCase().includes(letter.toLowerCase())
}
//replace the * with an letter if match found
const replaceastrisk = (letter, randomWord, hiddenWord) => {
    for (let i = 0; i < randomWord.length; i++) {
        let currentChar = randomWord[i]
        if (currentChar.toLowerCase() === letter.toLowerCase()) {
            hiddenWord[i] = randomWord[i];
        }
    }
    return hiddenWord;
}



//function that containt other functions to not make it global function
const startGame = () => {
    let randomWord = getRandomWord(words);
    let hiddenWord = createHiddenWord(randomWord);
    let guesses = 10;

    while (guesses > 0 && !(hiddenWord.join('') === randomWord)) {
        console.log(`you have Guesses ${guesses}`)
        console.log(hiddenWord.join(''));
        const answer = readlineSync.question('Type a letter: ')
        if (isLetter(answer)) {
            if (isLetterInWord(answer, randomWord)) {
                //replace the correct letter with * if matches
                hiddenWord = replaceastrisk(answer, randomWord, hiddenWord);
                console.log(`Your Guess: ${answer}`)
            } else {
                guesses--;
                console.log('that letter is NOT in the word')
                if (guesses == 0) {
                    won = false;
                    console.log(`GAME OVER OUT OF Guesses: ${guesses}`)
                }
            }
        } else {
            console.log("Invalid Please Type Letter")
        }
    }
    if (won) {
        console.log(`Congragulations You Guessed the word ${randomWord}`)
    }

}

console.log(figlet.textSync('Hang Man', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 100,
    whitespaceBreak: true
}));
startGame();
