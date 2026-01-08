// entre 9 e 10 exelente
// entre 7 e 8 bom
// entre 5 e 6 regular
// entre 0 e 4 reprovado

const notaDoAnulo = 1;

switch (Math.floor(notaDoAnulo)) {
    case 10:
    case 9:
        console.log("Excelente");
        break;
    case 8:
    case 7:
        console.log("Bom");
        break;
    case 6:
    case 5:
        console.log("Regular");
        break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Reprovado");
        break;
    default:
        console.log("Nota inválida");
        break;
}