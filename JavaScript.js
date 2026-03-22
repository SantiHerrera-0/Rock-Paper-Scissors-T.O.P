function getComputerChoice(){
    let decision = "Piedra|Papel|Tijera";
    const array = decision.split("|");
    let random = Math.floor(Math.random()*3);
    return array[random];
}
console.log(getComputerChoice());