import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (entrada) => {
  let numero = parseInt(entrada);
  let invertido = 0;

  const signo = Math.sign(numero);
  numero = Math.abs(numero);

  while (numero > 0) {
    const digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
  }

  console.log('Número invertido:', invertido * signo);
  rl.close();
});