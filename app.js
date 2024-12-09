const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    const rockBtn =document.querySelector('.rock');
    const paperBtn =document.querySelector('.paper');
    const scissorBtn =document.querySelector('.scissor');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissor'];
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    const movesLeft = document.querySelector('.movesleft');
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[choiceNumber];
const playGame = () => {    
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
            moves++;
            if(moves==10)
            {
             window.location.href="index.html";
            }
            movesLeft.innerText = `moves-left ${10-moves}`;
            winner(this.innerText, computerChoice)
        });
    })
}
const winner = (player, computer) => {
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer) {
        result.textContent = 'Tie'
    }
    else if(player == 'rock') {
        if(computer == 'paper') {
            result.textContent = 'Computer Won'
            computerScore++;
            computerScoreBoard.innerText= computerScore;
        } else {
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'scissors') {
        if(computer == 'rock') {
            result.textContent = 'Computer Won'
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    } 
    else if(player == 'paper') {
        if(computer == 'scissors') {
            result.textContent = 'Computer Won'
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}
const gameOver = (playerOptions, movesLeft) => {
    playerOptions.forEach(option => {
        option.style.display ='none';
    })
    chooseMove.innerText ='Game Over!!'
    movesLeft.style.display = 'none';

    if(player>computerScore) {
        result.style.fontSize ='2rem';
        result.innerText = 'You Won The Game';
        result.style.colour = '#308D46';
    }
    else if(player<computerScore) {
        result.style.fontSize ='2rem';
        result.innerText = 'You Lost The Game';
        result.style.colour = 'red';
    }
    else {
        result.style.fontSize ='2rem';
        result.innerText = 'Tie';
        result.style.colour = 'grey';
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex';
    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    })
}
playGame();
}
game();