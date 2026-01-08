const agora = new Date();
console.log(agora);

console.log("Ano:", agora.getFullYear());
console.log("Mês:", agora.getMonth() + 1); // Mês começa do zero
console.log("Dia:", agora.getDate());
console.log("Horas:", agora.getHours());
console.log("Minutos:", agora.getMinutes());
console.log("Segundos:", agora.getSeconds());
console.log("Milissegundos:", agora.getMilliseconds());

const dataEspecifica = new Date(2022, 11, 25, 10, 30, 0); // 25 de dezembro de 2022, 10:30:00
console.log("Data específica:", dataEspecifica);

const diaDaSemana = agora.getDay();
console.log("Dia da semana:", diaDaSemana);

const diaDoMes = agora.getDate();
console.log("Dia do mês:", diaDoMes);   

const dataFormatada = `${String(agora.getDate()).padStart(2, '0')}/${String(agora.getMonth() + 1).padStart(2, '0')}/${agora.getFullYear()} ${String(agora.getHours()).padStart(2, '0')}:${String(agora.getMinutes()).padStart(2, '0')}:${String(agora.getSeconds()).padStart(2, '0')}`;
console.log("Data formatada:", dataFormatada);

const dataFormatada2 = agora.toLocaleDateString();
console.log("Data formatada 2:", dataFormatada2);

const dataFormatada3 = agora.toLocaleTimeString();
console.log("Data formatada 3:", dataFormatada3);

