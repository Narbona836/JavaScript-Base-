const pessoa = {
    nome: "Willian",
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

console.log(pessoa.profissao);