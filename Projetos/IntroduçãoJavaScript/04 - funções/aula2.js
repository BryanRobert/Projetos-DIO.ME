function escreverNome(nome){
    console.log('Meu nome é', nome);
}
escreverNome('Bryan');

function verificarMaiorIdade(idade){
    if(idade >= 18){
        return console.log('Você é maior de Idade')
    }else {
        return console.log('Você é Menor de idade')
    }
}

verificarMaiorIdade(8)