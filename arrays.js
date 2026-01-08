const frutas = ['maçã', 'banana', 'laranja', 'uva', 'pera', 'laranja', 'kiwi'];

// Adiciona uma fruta no final do array
frutas.push('manga');

// Adiciona uma fruta no início do array
frutas.unshift('abacaxi');

// Remove a última fruta do array
frutas.pop();

// Remove a primeira fruta do array
frutas.shift();

// Remove a fruta na posição 1 do array
frutas.splice(1, 1);                               // (posição, quantidade)

console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

frutas.forEach((fruta, indice) => {
  console.log(`${indice}: ${fruta}`);
});

const frutasComA = frutas.filter(fruta => fruta.includes('a'));

console.log(frutasComA);

const frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());

console.log(frutasMaiusculas);

const frutasOrdenadas = frutas.sort();

console.log(frutasOrdenadas);

const frutasInvertidas = frutas.reverse();

console.log(frutasInvertidas);

const indiceLaranja = frutas.indexOf('laranja');

console.log(indiceLaranja);

const ultimoIndiceLaranja = frutas.lastIndexOf('laranja');

console.log(ultimoIndiceLaranja);