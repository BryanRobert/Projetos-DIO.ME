function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo
}
console.log(incrementarJuros(100, 20))

function main(){
    console.log('programa Principal')
}

main();