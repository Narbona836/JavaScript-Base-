const idade = 25

idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade"); // Operador Ternário



console.log("Calculando nota do aluno ");

//entre 9 e 10 = exelente
//entre 7 e 8 = bom
//entre 5 e 6 = regular
//menos que 5 = ruim

const nota = 10 
if (nota >= 9 && nota <= 10) {
    console.log("Excelente");
} else if (nota >= 7 && nota < 9) {
    console.log("Bom");
} else if (nota >= 5 && nota < 7) {
    console.log("Regular");
} else {
    console.log("Ruim");
}