/* Faça um programa para calcular o valor de uma viagem.
Você tera 3 variaveis, sendo: 
1 - preço do combustível
2 - gasto médio de combustível do carro por KM;
3- distancia em km da viagem
imprima no console o valor que será gasto para realizar esta viagem*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKM = 1580;

const litrosConsumidos = distanciaEmKM / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2)) //toFixed(2) serve para arredondar o valor digitado e entre () o número de casas que deseja arredondar após o ponto