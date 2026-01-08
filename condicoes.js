const nome = " " // Se tiver um espaço entre as aspas o JS considera como um valor definido 

if (nome) {
    console.log(" Seu nome é ", nome);
} else {
    console.log("A variável nome não foi definida")
}


const idade = null



if (idade != null) {
    if (idade >= 18) {
    console.log("Você é maior de idade");
} else if(idade >= 0 && idade < 18) {
    console.log("Você é menor de idade");
}
}