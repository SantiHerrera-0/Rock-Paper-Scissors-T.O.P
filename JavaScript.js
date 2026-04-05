let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let decision = "piedra|papel|tijera";
    const array = decision.split("|");
    let random = Math.floor(Math.random()*3);
    return array[random];
}

/*Antigua forma de tener la opcion del humano.
function getHumanChoice(){
    let respuesta = prompt("Ingrese una opcion. (Piedra|Papel|Tijera)");
    return respuesta.toLowerCase();
}*/
/*Devuelve 0 para empate, 1 para computadora y 2 para humano*/

function selectWinner(humanChoice, computerChoice){
    let ganador = (humanChoice === computerChoice) ? 0 : (humanChoice === "piedra" && computerChoice === "papel") ? 1 : (humanChoice === "piedra" && computerChoice === "tijera") ? 2 
    : (humanChoice === "papel" && computerChoice === "piedra") ? 2 : (humanChoice == "papel" && computerChoice === "tijera") ? 1 : (humanChoice === "tijera" && computerChoice === "piedra") ? 1 
    : (humanChoice === "tijera" && computerChoice === "papel") ? 2 : -1;
    return ganador;  
}

function playRound(humanChoice, computerChoice){
    ganador = selectWinner(humanChoice,computerChoice);
    if(humanScore === 5 || computerScore === 5){
        return ganadorFinal();
    }
    switch(ganador){
        case 0:{
            /*console.log("Hubo empate!");*/
            const div = document.querySelector("div");
            const resultado = document.createElement("p");
            const puntaje = document.createElement("p");
            resultado.textContent = "Hubo empate!";
            div.appendChild(resultado);
            puntaje.textContent = `El puntaje actual es: Humano = ${humanScore} vs Maquina = ${computerScore}`;
            div.appendChild(puntaje);
            break;
        }
        case 1:{
            /*console.log(`Perdiste! ${computerChoice} vence a ${humanChoice}`);*/
            const div = document.querySelector("div");
            const resultado = document.createElement("p");
            const puntaje = document.createElement("p");
            resultado.textContent = `Perdiste! ${computerChoice} vence a ${humanChoice}`;
            div.appendChild(resultado);
            computerScore ++;
            puntaje.textContent = `El puntaje actual es: Humano = ${humanScore} vs Maquina = ${computerScore}`;
            div.appendChild(puntaje);
            break;
        }
        case 2:{
            /*console.log(`Ganaste! ${humanChoice} vence a ${computerChoice}`);*/
            const div = document.querySelector("div");
            const resultado = document.createElement("p");
            const puntaje = document.createElement("p");
            resultado.textContent = `Ganaste! ${humanChoice} vence a ${computerChoice}`;
            div.appendChild(resultado);
            humanScore ++;
            puntaje.textContent = `El puntaje actual es: Humano = ${humanScore} vs Maquina = ${computerScore}`;
            div.appendChild(puntaje);
            break;
        }
    }
}

function ganadorFinal(){
    const div = document.querySelector("div");
    const p = document.createElement("p");
    if (humanScore > computerScore){
        p.textContent = "El ganador es el humano!";
        div.appendChild(p);
    }else if(computerScore > humanScore){
        p.textContent = "La ganadora es la maquina!";
        div.appendChild(p);
    }
}

/*Antigua forma de hacer el ciclo.
for(let i=0; i<5; i++){
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`El puntaje es: Humano ${humanScore}, Maquina ${computerScore}`);
}*/