var readline = require('readLine');

console.log("**********************************************")
console.log("Bem vindos ao sistema Node.js para console app")
console.log("**********************************************")

console.log("Digite seu nome:");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  
  rl.on('line', function(nome){
    console.log("O nome digitado é: " + nome);
  })