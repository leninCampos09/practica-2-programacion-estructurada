//Crear un programa que reciba un número y lo devuelva con sus cifras invertidas.

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (entrada) => {
  const numero = parseInt(entrada);
  const invertido = parseInt(numero.toString().split('').reverse().join(''));
  console.log('Número invertido:', invertido);
  rl.close();
});