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

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());


