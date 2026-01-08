function saudacao() { 
   console.log("Olá! Seja bem-vindo(a)!")
}
setTimeout(saudacao, 6000);

let contador = 0;
let id = setInterval(() => {
    contador++;
    console.log("Contador: ", contador);
    if(contador == 10){
        clearInterval(id);
    }
    
}, 1000);

const numeroAleatorio = () => Math.random();

console.log(numeroAleatorio());

const raizQuadrada = (a) => Math.sqrt(a);

console.log(raizQuadrada(10));

const raizCubica = (a) => Math.cbrt(a);

console.log(raizCubica(10));