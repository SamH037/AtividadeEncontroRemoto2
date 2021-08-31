let numeroDeAlunos = 10;

// Laço de repetição "for", contado 
for (let contador = 0; contador <= numeroDeAlunos; contador++) {

    if (contador == 0) {
        console.log ("O número atual é ZERO");
    } else if (contador % 2 == 0) {
        console.log(`O número ${contador} é PAR`);
    } else {
        console.log(`O número ${contador} é ÍMPAR`);
    }

}

// Laço de repetição "while", condicional

// let contador = 0;

// while (contador <= numeroDeAlunos) {

//     if (contador == 0) {
//         console.log("O número atual é ZERO");
//     } else if (contador % 2 == 1) {
//         console.log(`O número ${contador} é ÍMPAR`);
//     } else {
//         console.log(`O número ${contador} é PAR`);
//     }
//     contador++;
// }

// Laço de "forof", laço de lista

// let nomesAlunos = ["André", "Gabriel", "João", "Pedro"]

// for (let nome of nomesAlunos) {
//     console.log(`Esta pessoa se chama ${nome}`);    
// }

// Laço de "foreach", outro laço de lista

// let nomesAlunos = ["André", "Gabriel", "João", "Pedro"]

// nomesAlunos.forEach(nome => {
//     console.log(`O nome é ${nome}`)
    
// });