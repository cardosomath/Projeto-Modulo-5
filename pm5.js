const prompt = require("prompt-sync") (); //biblioteca baixada para utilização através do require


const propriety = []; //array criada para armazenar as propriedades css


let contador = false;

console.log("Biblioteca de CSS =)")
while (!contador) {
    console.log('')
    let question = prompt("Digite uma propriedade CSS: "); //receber input(dado)
    propriety.push(question)
    console.log('')
    let ask = prompt("Deseja continuar [S] ou [SAIR]: ").toUpperCase();

    if(ask === "SAIR") {
        console.log('Dados armazenados. Programa sendo fechado...')
        propriety.sort()
        console.log(propriety)
        contador = true

    }

}
