
function pickComputerMove() {
    const randomNumber = Math.floor((Math.random() * 3));

    let computerMove = '';

    if (randomNumber === 0) {
        computerMove = 'Rock';

    }
    else if (randomNumber === 1) {
        computerMove = 'Paper';
    }
    else if (randomNumber === 2) {
        computerMove = 'Scissors';
    }

    // console.log(computerMove);
    return computerMove;

}