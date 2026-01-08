require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  }).question('Qual é o seu nome? ', nome => {
    console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
    process.exit();
  });

