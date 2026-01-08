for(let contador = 0; contador <= 10; contador++){
    console.log("Contador é igual a: ", contador);
}

for(let numero =0; numero <= 20; numero += 2){
    console.log("Números pares: ", numero);
}

const palavra = "JavaScript";
for(let i = 0; i < palavra.length; i++){
    console.log(`Letra na posição ${i} é igual a: `, palavra[i]);
}

const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango"];
for(let j = 0; j < frutas.length; j++){
    console.log(`Fruta na posição ${j} é igual a: `, frutas[j]);
}

const numeros = [10, 20, 30, 40, 50];
let soma = 0;
for(let k = 0; k < numeros.length; k++){
    soma += numeros[k];
}
console.log("A soma dos números é igual a: ", soma);