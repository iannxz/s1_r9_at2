// Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
let nomes = []
let n

for (let index = 0; index < 7; index++) {
n = prompt(`Digite o nome:`)
nomes[index] = n;

}

console.log(nomes)

for (let index = 7; index >= 0; index--) {
        console.log(nomes[index])
    }


