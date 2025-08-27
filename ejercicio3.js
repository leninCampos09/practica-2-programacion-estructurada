//Cree una función que reciba un número, su tarea es retornar un array con las dos mitades del número.numberSplit(4) ➞ [2, 2] numberSplit(11) ➞ [5, 6]

function dividirNumero(numero) {
    const mitad1 = Math.floor(numero / 2);
    const mitad2 = Math.ceil(numero / 2);
    return [mitad1, mitad2];
    }

// Ejemplo de uso
console.log(dividirNumero(4)); // [2, 2]
console.log(dividirNumero(11)); // [5, 6]
console.log(dividirNumero(25)); // [12, 13]
console.log(dividirNumero(10)); // [5, 5]
console.log(dividirNumero(9)); // [4, 5]
console.log(dividirNumero(0)); // [0, 0]
