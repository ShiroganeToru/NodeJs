const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess(userGuess) {
    if(userGuess === secretNumber) {
        console.log('Bạn đã đoán trúng!');
        rl.close();
    } else if (userGuess > secretNumber){
        console.log('Số bạn đoán lớn hơn số bí ẩn');
        promptUser();
    } else {
        console.log('Số bạn đoán thấp hơn số bí ẩn');
        promptUser();
    }
}

function promptUser() {
    rl.question('Hãy đoán số từ 1 đến 100: ', (guess) => {
        const userGuess = parseInt(guess);
        
        if(isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            console.log('Vui lòng nhấp một số từ 1 đến 100');
            promptUser();
        } else {
            checkGuess(userGuess);
        }
    });
}

console.log('Trò chơi đoán số!');
promptUser();

/**
 * @param {int} a
 */
let a = 5;