const pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira"
};

console.log(pessoa);

pessoa.idade = 29;

console.log(pessoa);

delete pessoa.profissao;

console.log(pessoa);

pessoa.cidade = "São Paulo";

console.log(pessoa);

console.log(pessoa.nome);

console.log(pessoa.idade);

console.log(pessoa.cidade);

// Acessando propriedades dinamicamente
for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}