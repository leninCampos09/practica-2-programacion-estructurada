//Crear una función que reciba un número como parámetro y que retorne un nuevo array con el cuadrado de los dígitos del número ingresado. Ejemplo squareDigits(9119) ➞ [81, 1, 1, 81]

function cuadradosDeDigitos(numero) {
  // Convertimos el número a string para poder iterar sobre cada dígito
  const digitos = numero.toString().split('');

  // Mapeamos cada dígito a su cuadrado y lo convertimos de nuevo a número
  const cuadrados = digitos.map(digito => Math.pow(parseInt(digito), 2));

  return cuadrados;
}

// Ejemplo de uso
console.log(cuadradosDeDigitos(345)); // [9, 16, 25]