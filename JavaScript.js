let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let decision = "piedra|papel|tijera";
    const array = decision.split("|");
    let random = Math.floor(Math.random()*3);
    console.log(array[random]);
    return array[random];
}

function getHumanChoice(){
    let respuesta = prompt("Ingrese una opcion. (Piedra|Papel|Tijera)");
    return respuesta.toLowerCase();
}
/* 0 es para empate, 1 es para computadora y 2 es para humano*/
function selectWinner(humanChoice, computerChoice){
    let ganador = (humanChoice === computerChoice) ? 0 : (humanChoice === "piedra" && computerChoice === "papel") ? 1 : (humanChoice === "piedra" && computerChoice === "tijera") ? 2 
    : (humanChoice === "papel" && computerChoice === "piedra") ? 2 : (humanChoice == "papel" && computerChoice === "tijera") ? 1 : (humanChoice === "tijera" && computerChoice === "piedra") ? 1 
    : (humanChoice === "tijera" && computerChoice === "papel") ? 2 : -1;
    return ganador;  
}
/*
function playRound(humanChoice, computerChoice){
    selectWinner(humanChoice,computerChoice);

}
*/
ganador = selectWinner(getHumanChoice(),getComputerChoice());
console.log(ganador);