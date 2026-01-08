const idade = 18
const maiorIdade = idade >= 18
const possuiCarteiraDeMotorista = true 

const podeAplicarParaCarteiraDeMotorista = maiorIdade && possuiCarteiraDeMotorista

console.log("Pode aplicar para carteira de motorista?", podeAplicarParaCarteiraDeMotorista)

const podeviajarSozinha = maiorIdade || possuiCarteiraDeMotorista

console.log("Pode viajar sozinha?", podeviajarSozinha)

const precisaDeAcompanhante = !maiorIdade

console.log("Precisa de acompanhante?", precisaDeAcompanhante)