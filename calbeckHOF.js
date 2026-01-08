function somar(numero1, numero2, operacao){
    return operacao(numero1, numero2);
}

function subtrair(numero1, numero2, operacao){
    return operacao(numero1, numero2);
}   
function multiplicar(numero1, numero2, operacao){
    return operacao(numero1, numero2);
}
function dividir(numero1, numero2, operacao){
    return operacao(numero1, numero2);
}
console.log("Soma: ", somar(10, 5, (a, b) => a + b));
console.log("Subtração: ", subtrair(10, 5, (a, b) => a - b));
console.log("Multiplicação: ", multiplicar(10, 5, (a, b) => a * b));
console.log("Divisão: ", dividir(10, 5, (a, b) => a / b));