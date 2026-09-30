function getComputerChoice(){
    const random = Math.random();

    if(random < 1 / 3){
        return "rock";
    }
    else if(random < 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Choose rock, paper, or scissors: ");
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if(humanChoice === computerChoice){
            console.log("It's a tie!");
        }
        else if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        }
        else {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    }

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);

    if(humanScore > computerScore){
        console.log("You win!");
    } else if (computerScore > humanScore){
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();


