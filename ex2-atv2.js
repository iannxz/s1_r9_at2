/* 2 - Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final,
/* mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.*/

let numeros = [];
let n;

for (let index = 0; index < 10; index++) {
  n = prompt(`Digite um numero:`);
  numeros[index] = n;
}
for (let index = 0; index < 10; index++) {
  if (numeros[index] % 2 == 0) {
    console.log(`os numeros sao: ${numeros[index]} e a posição: ${index}`);
  }
}


