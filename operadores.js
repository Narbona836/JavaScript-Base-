let numeroUm = 25;
let numeroDois = 10;

const soma = numeroUm + numeroDois;
const subtracao = numeroUm - numeroDois;
const multiplicacao = numeroUm * numeroDois;
const divisao = numeroUm / numeroDois;
const resto = numeroUm % numeroDois;
const potenciacao = numeroUm ** numeroDois;
const contaComplexa = (numeroUm + numeroDois) * (numeroUm - numeroDois);
let incremento = numeroUm ++; // o jS não permite alterar veriavel como const 
let decremento = numeroDois --;
let atribuicao = numeroUm += numeroDois;
let atribuicaoMultiplicacao = numeroUm *= numeroDois;
let atribuicaoDivisao = numeroUm /= numeroDois;
let atribuicaoResto = numeroUm %= numeroDois;
let atribuicaoPotencia = numeroUm **= numeroDois;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto:", resto);
console.log("Potenciação:", potenciacao);
console.log("Conta Complexa:", contaComplexa);
console.log("Incremento:", incremento);
console.log("Decremento:", decremento); 
console.log("Atribuição:", atribuicao);
console.log("Atribuição Multiplicação:", atribuicaoMultiplicacao);
console.log("Atribuição Divisão:", atribuicaoDivisao);
console.log("Atribuição Resto:", atribuicaoResto);
console.log("Atribuição Potenciação:", atribuicaoPotencia);
