let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let decision = "piedra|papel|tijera";
    const array = decision.split("|");
    let random = Math.floor(Math.random()*3);
    return array[random];
}

function getHumanChoice(){
    let respuesta = prompt("Ingrese una opcion. (Piedra|Papel|Tijera)");
    return respuesta.toLowerCase();
}
/*Devuelve 0 para empate, 1 para computadora y 2 para humano*/
function selectWinner(humanChoice, computerChoice){
    let ganador = (humanChoice === computerChoice) ? 0 : (humanChoice === "piedra" && computerChoice === "papel") ? 1 : (humanChoice === "piedra" && computerChoice === "tijera") ? 2 
    : (humanChoice === "papel" && computerChoice === "piedra") ? 2 : (humanChoice == "papel" && computerChoice === "tijera") ? 1 : (humanChoice === "tijera" && computerChoice === "piedra") ? 1 
    : (humanChoice === "tijera" && computerChoice === "papel") ? 2 : -1;
    return ganador;  
}

function playRound(humanChoice, computerChoice){
    ganador = selectWinner(humanChoice,computerChoice);
    switch(ganador){
        case 0:
            console.log("Hubo empate!");
            break;
        case 1:
            console.log(`Perdiste! ${computerChoice} vence a ${humanChoice}`);
            computerScore ++;
            break
        case 2:
            console.log(`Ganaste! ${humanChoice} vence a ${computerChoice}`);
            humanScore ++;
            break;
        default:
            console.log("No hubo un ingreso valido.");
            break;
    }
}

function ganadorFinal(){
    if (humanScore >computerScore){
        console.log("El ganador es el humano!");
    }else if(computerScore >humanScore){
        console.log("La ganadora es la maquina!");
    }else{
        console.log("No hubo gandor!")
    }
    
}
for(let i=0; i<5; i++){
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`El puntaje es: Humano ${humanScore}, Maquina ${computerScore}`);
}

ganadorFinal();
