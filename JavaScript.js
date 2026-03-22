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

console.log(getHumanChoice());