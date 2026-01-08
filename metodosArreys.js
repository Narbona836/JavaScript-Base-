const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});
console.log("Números pares: ", numerosPares);
const numerosImpares = numeros.filter((numero) => {
    return numero % 2 !== 0;
});
console.log("Números ímpares: ", numerosImpares);

const numerosAoQuadrado = numeros.map((numero) => {
    return numero ** 2;
});
console.log("Números ao quadrado: ", numerosAoQuadrado);