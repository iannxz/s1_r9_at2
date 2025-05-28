// 3 - Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e 15 sorteados pelo computador.
// Depois disso, peça para o usuário digitar um número (chave) e seu programa deve mostrar em que posições essa chave foi encontrada.
// Mostre também quantas vezes a chave foi sorteada.

let numeros = [];
let contador = 0;

for (let i = 0; i < 30; i++) {
  numerosSorteados = Math.ceil(Math.random() * 15);
  numeros[i] = numerosSorteados;
  console.log(numerosSorteados);
}

let chave = parseInt(prompt("Digite o número final: "));

for (let i = 0; i < 30; i++) {
  if (chave == numeros[i]) {
    console.log(`a chave foi encontrada na posição ${i}`);
    contador++;
  }
}

console.log(`a chave ${chave} foi encontrada ${contador} vezes  `);
console.log(`os numeros sorteados foram: ${numeros}`);
