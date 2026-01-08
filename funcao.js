function somar(a, b){
    return a + b;
}
function subtrair(a, b){
    return a - b;
}
function multiplicar(a, b){
    return a * b;
}
function dividir(a, b){
    return a / b;
}

console.log("Soma: ", somar(10, 5));
console.log("Subtração: ", subtrair(10, 5));
console.log("Multiplicação: ", multiplicar(10, 5));
console.log("Divisão: ", dividir(10, 5));


const saudacao =(nome) => {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}

console.log(saudacao("Willian"));

const soma = (a, b) => a + b;

console.log(soma(10, 5));

const multiplica = (a, b) => a * b;

console.log(multiplica(10, 5));

const divisao = (a, b) => a / b;

console.log(divisao(10, 5));

const subtracao = (a, b) => a - b;

console.log(subtracao(10, 5));

const modulo = (a, b) => a % b;

console.log(modulo(10, 5));

const potencia = (a, b) => a ** b;

console.log(potencia(10, 5));

const raizQuadrada = (a) => Math.sqrt(a);

console.log(raizQuadrada(10));

const raizCubica = (a) => Math.cbrt(a);

console.log(raizCubica(10));

const numeroAleatorio = () => Math.random();

console.log(numeroAleatorio());