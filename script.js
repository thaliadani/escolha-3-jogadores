timeJogador = ["", "", ""];
timeComputador = ["", "", ""];

forcaTimeJogador = [0, 0, 0];
forcaTimeComputador = [0, 0, 0];

for (let i = 0; i < 3; i++) {
  escolhaJogador = prompt("Digite o nome do jogador: " + (i + 1));
  timeJogador[i] = escolhaJogador;
  
  //Calcular a força de cada jogador e depois somar para saber a força do time
  forcaTimeJogador += Math.floor(Math.random() * 10) + 1;
} 

for (let i = 0; i < 3; i++) {
  escolhaAleatorio = Math.floor(Math.random() * 10);
  listaPossiveisComputador = [
    "Carlos",
    "Paulo",
    "Amanda",
    "Alice",
    "Bruno",
    "Pedro",
    "Pamela",
    "Maria",
    "Joao",
    "Natasha",
  ];
  timeComputador[i] = listaPossiveisComputador[escolhaAleatorio];
  
  //Calcular a forca de cada jogador do time do computador
  forcaTimeComputador += Math.floor(Math.random() * 10) + 1;
}

//Comparar oss dois times para saber quem venceu
if(forcaTimeJogador > forcaTimeComputador){
  alert("Seu time venceu! Sua força é: " + forcaTimeJogador);
}else if(forcaTimeComputador > forcaTimeJogador){
  alert("O time do computador venceu! A força do time do computador é: " + forcaTimeComputador);
}else{
  alert("Empate!");
}