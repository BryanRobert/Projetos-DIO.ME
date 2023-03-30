/*1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; */

const nota1 = 3;
const nota2 = 3;
const nota3 = 3;
const Média = (nota1 + nota2 + nota3) / 3;
console.log(Média)

if (Média < 5){
    console.log('Aluno Reprovado')
}else if (Média >= 5 && Média <= 7){
    console.log('Aluno em Reperação')
}else {
    console.log('Aluno aprovado')
}