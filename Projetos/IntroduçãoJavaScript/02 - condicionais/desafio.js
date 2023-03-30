/* Faça um programa para calcular o valor de uma viagem.
Você tera 5 variaveis, sendo: 
1 - preço do etanol;
2 - preço da gasolina;
3- o tipo de combustível que está no seu carro;
4 - gasto médio de combustível do carro por KM;
5 - distancia em km da viagem
imprima no console o valor que será gasto para realizar esta viagem*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKM = 100;
const tipoCombustivel = "Etanol";
const litrosConsumidos = distanciaEmKM / kmPorLitro;


if (tipoCombustivel === "Etanol") {
    const valorEtanol = litrosConsumidos * precoEtanol;
    console.log(valorEtanol.toFixed(2))
} else {
    const valorGasolina = litrosConsumidos * precoGasolina;
    console.log(valorGasolina.toFixed(2))
}

