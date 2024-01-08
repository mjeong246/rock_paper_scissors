choices = ["Rock", "Paper","Scissors"];

function mod(n, m) {
    return ((n % m) + m) % m;
  }

function getComputerChoice() {
    let randomIndex = Math.floor(choices.length*Math.random());
    return choices[randomIndex];
};

function getIndex(selection) {
    for (i = 0; i <= choices.length; i++) {
        if (choices[i] == selection) {
            return i;
        }
    }
    return undefined;
}

function capitalize(str) {
    str = str.toLowerCase();
    return str[0].toUpperCase() + str.substring(1,str.length);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    playerIndex = getIndex(playerSelection);
    computerChoice = getComputerChoice();
    computerIndex = getIndex(computerSelection);

    if (playerIndex == undefined) {
        return [undefined, "Invalid move from player (must be rock, paper, scissors)"];
    } else if (playerIndex == computerIndex) {
        return ["tie",`${playerSelection} vs. ${computerSelection}. Tie!`];
    } else if (computerIndex == mod((playerIndex - 1), choices.length)) {
        return ["won", `You Win! ${playerSelection} beats ${computerSelection}`];
    } else {
        return ["lost", `You Lose! ${computerSelection} beats ${playerSelection}`];
    }
};

function game() {
    playerScore = 0;
    computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper, or Scissors?: ");
        result = playRound(playerSelection, computerSelection);
        let outcome = result[0];
        let msg = result[1];
        switch (outcome) {
            case "tie":
                break;
            case "won":
                playerScore++;
                break;
            case "lost":
                computerScore++;
                break;
            default:
                break;
        }
        console.log(msg);
        console.log(`You: ${playerScore} Computer: ${computerScore}`)
    }
    if (playerScore > computerScore) {
        console.log("YOU WIN THE GAME!");
    } else {
        console.log("YOU LOSE THE GAME!");
    }
}